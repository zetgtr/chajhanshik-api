<?php

namespace App\Models\Admin\Page;

use App\Models\Admin\Navigation\NavigationList;
use App\Models\Admin\Panel\DataPanel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageCreate extends Model
{
    use HasFactory;

    protected $table = 'page_create';

    protected $fillable = [
        'title','url','custom_title','description','keywords','access'
    ];

    public function setPanelData($request,$page){
        $datahub = json_decode($request->input('datahub'));
        DataPanel::query()->where('id_page',$page->id)->delete();
        if (!empty($datahub->data)) {
            foreach ($datahub->data as $key => $data) {
                $this->setData($datahub->data,$page);
            }
        }
    }

    private function setData($datas,$page,$parent = null){
        foreach ($datas as $key => $data) {
            $dataPanel = new DataPanel();
            if (!empty($data->id_panel)) $dataPanel->id_panel = $data->id_panel;
            $dataPanel->display = $data->display;
            $dataPanel->type = $data->type;
            $dataPanel->content = $data->content;
            $dataPanel->id_boll = false;
            $dataPanel->parent = $parent;
            if (!empty($data->safe)) $dataPanel->safe = $data->safe;
            $dataPanel->id_page = $page->id;
            $dataPanel->order = $key;
            $dataPanel->save();
            if(!empty($data->_child) && count($data->_child) > 0)
                $this->setData($data->_child,$page,$dataPanel->id);
        }
    }

    public function links(){
        return $this->belongsToMany(NavigationList::class,'links_has_page','page_id','link_id','id','id');
    }

    public function arrayLinks(){
        return $this->belongsToMany(NavigationList::class, 'links_has_page', 'page_id', 'link_id', 'id', 'id')
            ->pluck('link_id')
            ->toArray();
    }
}
