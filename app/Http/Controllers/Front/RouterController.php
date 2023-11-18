<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use App\QueryBuilder\Admin\Panel\PanelBuilder;

class RouterController extends Controller
{


    public function index(PanelBuilder $panelBuilder){
        return \View('pages.home',[
            'title'=>'Главная',
            'settings'=> Settings::query()->first(),
        ]);
    }

    public function pages($pages,$bredcrambs){
        $pageBuilder = new PageDataPanelBuilder();
        return \View('pages.page',[
            'meta'=> ['title' => $pages->custom_title ?? $pages->title, 'description' => $pages->description,'keywords'=>$pages->keywords],
            'title'=> $pages->title,
            'bredcrambs' => $bredcrambs,
            'links'=> $pages->links,
            'panels' => $pageBuilder->getDataPanel($pages->id)
        ]);
    }
}
