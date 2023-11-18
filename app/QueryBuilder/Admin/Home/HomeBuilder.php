<?php

namespace App\QueryBuilder\Admin\Home;

use App\Enums\MetrikaEnums;
use App\Models\Admin\Home\Metrika;
use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\QueryBuilder;
use AXP\YaMetrika\Client;
use AXP\YaMetrika\YaMetrika;
use DateInterval;
use Illuminate\Database\Eloquent\Collection;
use DateTime;

class HomeBuilder extends QueryBuilder
{
    private YaMetrika $metrika;
    private Metrika $metrikaModel;
    public function __construct()
    {
        /** @noinspection PhpFieldAssignmentTypeMismatchInspection */
        $this->metrikaModel = Metrika::query()->find(1);
        $token = app('firebase.database')->getReference('/metrika/key')->getValue();
        $counterId = $this->metrikaModel->counter_id;

        $client = new Client($token, $counterId ?? 0);
        $this->metrika = new YaMetrika($client);

    }

    public function getMetrikaTable(){
        $endDate = new DateTime();
        $startDate = (new DateTime())->sub(new DateInterval("P30D"));
        $params = [
            'date1'      => $startDate->format('Y-m-d'),
            'date2'      => $endDate->format('Y-m-d'),
            'metrics'    => 'ym:s:visits,ym:s:pageviews,ym:s:users',
            'dimensions' => 'ym:s:date',
            'sort'       => 'ym:s:date',
            'filters'    => "ym:s:isRobot=='No'"
        ];
        $visitors = $this->metrika->customQuery($params)->formatData();
        $data = [];
        foreach ($visitors['data'] as $visitor)
        {
            $data[] = array_merge(['date' => date("d.m.Y", strtotime($visitor['dimensions']['date']['name']))], $visitor['metrics']);
        }

        return $data;
    }

    private function setBrouser($name,$visitor)
    {
        return [
            'name'=>$name,
            'count'=>  $visitor['metrics']['users']
        ];
    }


    public function getMetrikaBrowser($date)
    {
        $params = [
            'date1' => $date,
            'date2' => $date,
            'metrics' => 'ym:s:users',
            'dimensions' => 'ym:s:browserName',

        ];
        $visitors = $this->metrika->customQuery($params)->formatData();

        $data = [];

        foreach ($visitors['data'] as $visitor)
        {
            $name = $visitor['dimensions']['browserName']['name'];
            $data[] = match ($name){
                "Google Chrome", "Google: мобильное приложение", "Chrome Mobile" => $this->setBrouser('chrome',$visitor),
                "Яндекс Старт: мобильное приложение", "Яндекс.Браузер","Яндекс с Алисой: мобильное приложение","Яндекс.Браузер lite"  => $this->setBrouser('yandex',$visitor),
                "Opera", "Opera Mobile", "Opera Mini" => $this->setBrouser('opera',$visitor),
                "Firefox", "Firefox Mobile",  => $this->setBrouser('firefox',$visitor),
                "Edge"  => $this->setBrouser('edge',$visitor),
                "Mobile Safari", "Safari",  => $this->setBrouser('safari',$visitor),
                "Samsung Internet"  => $this->setBrouser('samsung',$visitor),
                default => $this->setBrouser('default',$visitor)
            };
        }

        $totalCounts = array(); // Ассоциативный массив для хранения сумм по каждому уникальному значению 'name'

        foreach ($data as $item) {
            $name = $item['name'];
            $count = $item['count'];

            if (!isset($totalCounts[$name])) {
                $totalCounts[$name] = 0;
            }

            $totalCounts[$name] += $count;
        }
        $data = [];
        foreach ($totalCounts as $key=>$totalCount)
        {
            if($this->metrikaModel->count_browser < $totalCount)
            {
                $this->metrikaModel->count_browser = $totalCount;
                $this->metrikaModel->save();
            }
            $data[] = [
                'name'=>$key,
                'count'=>$totalCount
            ];
        }
        $data[]['count_browser'] = $this->metrikaModel->count_browser;
        return $data;
    }

    public function getMetrikaAge($date)
    {
        $params = [
            'date1' => $date,
            'date2' => $date,
            'metrics' => 'ym:s:users',
            'dimensions' => 'ym:s:ageIntervalName	',

        ];
        $visitors = $this->metrika->customQuery($params)->formatData();

        $data = [];

        foreach ($visitors['data'] as $visitor)
        {
            $data[] = ['name'=>$visitor['dimensions']['ageIntervalName']['name'],'count'=>$visitor['metrics']['users']];
        }


        return $data;
    }


    public function getMetrikaDevices($date){
        $params = [
            'date1' => $date,
            'date2' => $date,
            'metrics' => 'ym:s:users',
            'dimensions' => 'ym:s:deviceCategory',

        ];
        $visitors = $this->metrika->customQuery($params)->formatData();

        $data = [];
        foreach ($visitors['data'] as $visitor)
        {
            $data[] = array_merge(['name' => $visitor['dimensions']['deviceCategory']['name'],'type' => $visitor['dimensions']['deviceCategory']['icon_id']], $visitor['metrics']);
        }


        return $data;
    }

    public function getNavigatinMetrika()
    {
        $links = [
            MetrikaEnums::USERS->value => ['url'=> MetrikaEnums::USERS->value,  'name' => 'Пользователи'],
            MetrikaEnums::VISITS->value => ['url'=> MetrikaEnums::VISITS->value, 'name' => 'Визиты'],
            MetrikaEnums::PAGEVIEWS->value => ['url'=> MetrikaEnums::PAGEVIEWS->value,  'name' => 'Просмотры']
        ];

        $links[MetrikaEnums::USERS->value]['active'] = true;

        return $links;
    }

    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }
}
