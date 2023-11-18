<?php

namespace App\Http\Controllers\Admin;

use App\Enums\MenuEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\Menu\SettingsMenuRequest;
use App\Models\Admin\Menu;
use App\QueryBuilder\MenuBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Ramsey\Collection\Collection;

class SettingsMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(MenuBuilder $menuBuilder): View
    {
        return view('admin.sidebar.settings.menu.index',[
            'menu'=>MenuEnums::LEFT,
            'menus'=>$menuBuilder->getMenu(MenuEnums::LEFT),
            'menuLinks' => $menuBuilder->getLinks(MenuEnums::LEFT->value)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): View
    {
        return \view('admin.sidebar.settings.menu.create',['menu'=>$request->get('menu')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SettingsMenuRequest $request, MenuBuilder $menuBuilder): RedirectResponse
    {
        $menu = Menu::create($request->validated());
        if ($menu) {
            $position = $request->validated('position');
            return \redirect()->route('admin.menu.show',[
                'menu'=>$position,
                'menus'=>$menuBuilder->getMenu($position),
                'menuLinks' => $menuBuilder->getLinks($position)
            ]);
        }

        return \back();
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuEnums $menu, MenuBuilder $menuBuilder): View
    {
        return view('admin.sidebar.settings.menu.index',[
            'menu'=>$menu,
            'menus'=>$menuBuilder->getMenu($menu),
            'menuLinks' => $menuBuilder->getLinks($menu->value)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu): array
    {
        if(!$menu)
        {
            return ['status'=>false, 'message'=>'Ошибка. Попробуйте позже'];
        }
        return ['status'=>true,'menu'=>$menu];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SettingsMenuRequest $request, Menu $menu): RedirectResponse
    {
        $menu = $menu->fill($request->validated());
        if ($menu->save()) {
            return \back()->with('success', __('messages.admin.news.update.success'));
        }

        return \back()->with('error', __('messages.admin.news.update.fail'));
    }

    public function menuOrder(Request $request, MenuBuilder $menuBuilder)
    {
        $menuBuilder->setOrder($request->all()['items']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu): RedirectResponse|array
    {
        try {
            $menu->delete();
            $response = ['status' => true,'message' => __('messages.admin.news.destroy.success')];
        } catch (\Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.news.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
