<?php

namespace App\QueryBuilder\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class PageDataPanelBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = DataPanel::query();
    }


    public function getPagePanels(int $id){
        $data = $this->model->where('id_page',$id)->where('parent',null)->get();

        return $this->getData($data);
    }

    private function getData($data){
        foreach ($data as $key=>$datum){
            $panel = Panel::query()->where('publish',true)->find($datum['id_panel']);

            if($datum->type === 'panel') {
                if (!is_null($datum['safe'])) {
                    $data[$key]['content'] = json_decode($panel->data);
                } else {
                    $data[$key]['content'] = json_decode($datum['content']);
                }
                $data[$key]['alias'] = $panel->alias;
                $data[$key]['title'] = $panel->title;
            }

            if($data[$key]->type === 'section'){
                $data[$key]->_child = $this->getData($data[$key]->child());
            }
        }

        return $data;
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }

    public function getDataPanel(int $id)
    {
        $data = $this->getPagePanels($id);

        return $this->setContentPagePanel($data);
    }

    private function setContentPagePanel($data,$flag = false){
        $panelBuilder = new PanelBuilder();
        foreach ($data as $key=>$datum)
        {
            match ($datum->type){
                "panel" => $datum->content = $panelBuilder->setItemData((array)$datum->content),
                "section" => $datum->_child = $this->setContentPagePanel($datum->_child,true),
                default => ''
            };
        }
        return $data;
    }
}
