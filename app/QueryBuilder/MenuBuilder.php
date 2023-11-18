<?php

namespace App\QueryBuilder;

use App\Enums\MenuEnums;
use App\Models\Admin\Menu;
use App\Models\Admin\Roles;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class MenuBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = Menu::query();
    }

    public function getLinks(string $key)
    {
        $links = [MenuEnums::LEFT->value => ['url'=> route('admin.menu.show', ['menu'=>MenuEnums::LEFT]), 'name' => 'Левое меню'],
            MenuEnums::RIGHT->value => ['url'=> route('admin.menu.show', ['menu'=>MenuEnums::RIGHT]),  'name' => 'Правое меню']];
        $links[$key]['active'] = true;
        return $links;
    }

    public function getMenuRoles(Roles $role): Collection|array
    {
        $menus = $this->model
            ->select('menus.*', 'roles_has_menus.show')
            ->leftJoin('roles_has_menus', function ($join) use ($role) {
                $join->on('menus.id', '=', 'roles_has_menus.menu_id')
                    ->where('roles_has_menus.role_id', '=', $role->id);
            })
            ->where('url', '!=', null)
            ->get();
       foreach ($menus as $key=>$menu){
           if(!Auth::user()->hasMenu($menu->id)){
               unset($menus[$key]);
           }
           if(Auth::user()->role_id !== 1 && $menu->id === 9){
               unset($menus[$key]);
           }
       }
       return $menus;
    }
    public function setOrder(array $menus, int $parent = null)
    {
        foreach ($menus as $key=>$menu)
        {
            $this->model->where('id',$menu['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->model = Menu::query();
            if(!empty($menu['children']))
            {
                $this->setOrder($menu['children'], $menu['id']);
            }
        }
    }

    private function checkMenu(Collection $menus){
        foreach ($menus as $key=>$menu){
            if(!$menu->url && count($menu->parent) == 0){
//                unset($menus[$key]);
            }
        }
        return $menus;
    }

    private function setMenuParent(string|MenuEnums $menu,Collection $items)
    {
        foreach ($items as $key=>$item)
        {
            if ($item->url && !Auth::user()->hasMenu($item->id)){
                unset($items[$key]);
            }else{
                $this->model = Menu::query();
                $item->parent = $this->model->where('position','=',$menu)->where('parent','=',$item->id)->orderBy('order')->get();
                $this->setMenuParent($menu,$item->parent);
            }
        }
//        dd($items);
        return $this->checkMenu($items);
    }

    public function getMenu(string|MenuEnums $menu): Collection
    {
        $menus = $this->model->where('position','=',$menu)->where('parent','=',null)->orderBy('order')->get();

        return $this->setMenuParent($menu, $menus);
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
