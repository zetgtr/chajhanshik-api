<?php

namespace App\QueryBuilder\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PanelBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = Panel::query();
    }

    public function getLinks($key = false)
    {
        $links = [
            PanelNavigationEnums::SITE->value => ['url'=> PanelNavigationEnums::SITE->value, 'name' => 'На сайте'],
            PanelNavigationEnums::SERVICE->value => ['url'=> PanelNavigationEnums::SERVICE->value,  'name' => 'Сервисные']
        ];

        if($key) $links[$key]['active'] = true;

        return $links;
    }
    public function getSitePanels(): Collection
    {
        return $this->model->where('service',0)->get();
    }
    public function getServicePanels(): Collection
    {
        return $this->model->where('service',1)->get();
    }
    public function getPanelAll(): Collection
    {
        $panels = $this->model->get();
        foreach ($panels as $key=>$panel)
        {
            $panel->data = json_decode($panel->data);
            $panels[$key] = $panel;
        }

        return $panels;
    }

    private function selectRow($type, $col, $order, $limit, $where, $table, $query)
    {
        $array = [];
        if($type != 'query')
        {
            $query = '';
            foreach ($col as $key => $val) {
                if ($val != 'none') {
                    $query .= "`$val` as '$key', ";
                }
            }
            $query = substr($query, 0, -2);
            if ($query != false) {
                $order = $order != '' ? 'ORDER BY ' . $order . ' ' : '';
                $limit = $limit != '' ? 'LIMIT ' . $limit . ' ' : '';
                $where = $where != '' ? 'WHERE ' . $where . ' ' : 'WHERE 1 ';
                $data = DB::select("SELECT $query FROM `" . $table . "` $where $order $limit");
                foreach ($data as $key => $val) {
                    if (is_string($val)) {
                        $data[$key] = htmlspecialchars($val, ENT_QUOTES);
                        $data[$key] = str_replace(array("\r", "\n"), "", $data[$key]);
                    }
                }
                $array[] = $data;
            }
        } else {
            $data = DB::select($query);
            $ar = [];
            foreach ($col as $key => $val) {
                $ar[$key] = isset($data[$val]) ? $data[$val] : '';
                if (is_string($ar[$key])) {
                    $ar[$key] = htmlspecialchars($ar[$key], ENT_QUOTES);
                    $ar[$key] = str_replace(array("\r", "\n"), "", $ar[$key]);
                }
            }
            $array[] = $ar;
        }
        foreach ($array as $key => $val) {
            foreach ($col as $key2 => $val2) {
                if (!isset($val[$key2])) {
                    $array[$key][$key2] = '';
                }
            }
            ksort($array[$key]);
        }
        return $array;
    }

    private function selectTable()
    {
        $array = array();
        $row = DB::select("SHOW TABLES FROM `".env("DB_DATABASE").'`');
        foreach ($row as $data)
        {
            $data = (array) $data;
            $array [] =  [$data['Tables_in_'.env("DB_DATABASE")],"2"];
        }
        return json_encode($array);
    }

    private function selectCol($type, $table, $query)
    {
        try {
            $array = ['col' => []];
            if($type == 'default'){
                $columns = DB::select("SHOW COLUMNS FROM `".$table."`");
                $data = [];
                foreach ($columns as $column)
                    $data[] = $column->Field;
                $array = ['col' => $data];
            }else{
                preg_match('/^.*FROM\s*[`]*\s*([^\s`]*).*$/',$query,$matc);
                $rez = DB::select($query);
                if(isset($rez)){
                    $array = ['col'=> array_keys((array) $rez[0]),'from'=>'2'];
                }
            }
        } catch (\Exception $exception){
            $array = ['from'=>'1'];
        }

        return json_encode($array);
    }

    public function getSelectTable(Request $request){
        return match ($request->input('operation')){
            "selectTable" => $this->selectTable(),
            "selectCol" => $this->selectCol(
                $request->input('type'),
                $request->input('table'),
                $request->input('query')
            ),
            "selectRow" => $this->selectRow(
                $request->input('type'),
                $request->input('col'),
                $request->input('ORDER'),
                $request->input('LIMIT'),
                $request->input('WHERE'),
                $request->input('table'),
                $request->input('query')
            )
        };
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }

    public function setItemData(array $array)
    {

        if (count($array['data']) == 0) {
            return '';
        }
        $arrayresult = [];
        $arrayKey = array_search('key', $array['type']);
        foreach ($array['data'] as $key => $val) {
            foreach ($val as $key2 => $val2) {
                if ($array['type'][$key2] == 'key') {
                    continue;
                }
                if ($array['header'][$key2] == '') {
                    $array['header'][$key2] = $key2;
                }
                if ($array['type'][$key2] == 'array') {
                    if ($arrayKey !== false && $array['data'][$key][$arrayKey] != '') {
                        $arrayResult[$array['data'][$key][$arrayKey]][$array['header'][$key2]] = self::setItemData((array) $val2);
                    } else {
                        $panel = self::setItemData((array) $val2);
                        $arrayResult[$key][$array['header'][$key2]] = $panel != "" ? $panel : [];
                    }
                } else {
                    if ($arrayKey !== false && $array['data'][$key][$arrayKey] != '') {
                        $arrayResult[$array['data'][$key][$arrayKey]][$array['header'][$key2]] = &$array['data'][$key][$key2];
                    } else {
                        $arrayResult[$key][$array['header'][$key2]] =  &$array['data'][$key][$key2];
                    }
                }
            }
        }


        return $arrayResult;
    }

    public function getAlias(string $alias,$skip=null,$take=null)
    {
        if($take)
            $datas = Panel::query()
                ->where('alias',$alias)
                ->where('publish',true)
                ->skip($skip)
                ->take($take)
                ->get();
        else
            $datas = Panel::query()->where('alias',$alias)->where('publish',true)->get();
        foreach ($datas as $data)
            $data->data = json_decode($data->data);

        $panel = [];

        foreach ($datas as $key => $item)
        {
            $panel = $this->setItemData((array)$item->data);
        }
        return $panel;
    }
    public function createPanel(mixed $panel)
    {
        $panelValue = $panel['alias'];
        $newContent = view("template.templateComponent",[
            'panel'=>['title'=>$panel['title'],'alias'=>$panel['alias'],'data'=> $this->setItemData(json_decode($panel['data'], true))]
        ])->render();
        $newFileName = $panelValue.'.blade.php';
        $newFilePath = resource_path('views/components/front/panels').'/' . $newFileName;
        file_put_contents($newFilePath, $newContent);
    }

    public function removePanel(Panel $panel)
    {
        $panelValue = $panel->alias;
        $componentFile = resource_path('views/components/front/panels').'/' . $panelValue.'.blade.php';
        if(file_exists($componentFile))
        {
            unlink($componentFile);
        }
    }
}
