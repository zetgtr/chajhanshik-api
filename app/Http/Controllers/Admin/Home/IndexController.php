<?php

namespace App\Http\Controllers\Admin\Home;

use App\Http\Controllers\Controller;
use App\Models\Admin\Home\Metrika;
use App\QueryBuilder\Admin\Home\HomeBuilder;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(HomeBuilder $homeBuilder)
    {
        $metrikaModel = Metrika::query()->find(1);
        if($metrikaModel->counter_id)
            return \view("admin.home.index",[
                'metrika'=> json_encode($homeBuilder->getMetrikaTable()),
                'links' => $homeBuilder->getNavigatinMetrika(),
                'device'=>json_encode($homeBuilder->getMetrikaDevices(date('Y-m-d'))),
                'browser'=>json_encode($homeBuilder->getMetrikaBrowser(date('Y-m-d'))),
                'age'=>json_encode($homeBuilder->getMetrikaAge(date('Y-m-d')))
            ]);
        else
            return \view("admin.home.indexNoCounter");
    }
    public function getDevices(HomeBuilder $homeBuilder, Request $request)
    {
        return $homeBuilder->getMetrikaDevices(date('Y-m-d',strtotime($request->get('date'))));
    }
    public function getBrowsers(HomeBuilder $homeBuilder, Request $request)
    {
        return $homeBuilder->getMetrikaBrowser(date('Y-m-d',strtotime($request->get('date'))));
    }
    public function getAge(HomeBuilder $homeBuilder, Request $request)
    {
        return $homeBuilder->getMetrikaAge(date('Y-m-d',strtotime($request->get('date'))));
    }
}
