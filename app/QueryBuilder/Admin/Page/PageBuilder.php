<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PageBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = PageCreate::query();
    }

    public function setOrder(array $pages, int $parent = null)
    {
        foreach ($pages as $key=>$page)
        {
            $this->model->where('id',$page['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->model = PageCreate::query();
            if(!empty($page['children']))
            {
                $this->setOrder($page['children'], $page['id']);
            }
        }
    }

    private function setPagesParent(Collection $items)
    {


        foreach ($items as $item)
        {
            $this->model = PageCreate::query();
            $parent = $this->model->where('parent','=',$item->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $item->parent = $parent;
                $this->setPagesParent($item->parent);
            }
        }

        return $items;
    }

    public function getPagesParent(): Collection
    {
        $pages = $this->model->where('parent','=',null)->orderBy('order')->get();
        return $this->setPagesParent($pages);
    }

    public function createPage($page)
    {
        $data = DataPanel::query()->where('id_page',$page->id)->get();
        foreach ($data as $item)
        {
            $panel = Panel::query()->find($item->id_panel);
            $panels[] = ['component'=> $panel->alias."-component /",
                'import'=>"import ".$panel->alias.'Component from ',
                'from' => "../../infusions/".$panel->alias."Component.vue",
                'export'=>$panel->alias."Component",
            ];
        }
//        dd($page->id);
        $newContent = view("template.templatePage",[
            'componentsList'=> $panels,
            'title' => $page->title,
        ])->render();
        $newFileName = $page->title.'View.vue';
        $newFilePath = resource_path('vue/src/views/infusions').'/' . $newFileName;
        file_put_contents($newFilePath, $newContent);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
