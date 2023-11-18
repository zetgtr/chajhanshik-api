<?php

use App\Models\Admin\Navigation\NavigationList;
use App\Models\Admin\Panel\Panel;

if (!function_exists('get_navigation_list')) {
    function get_navigation_list($alias)
    {
        $data = NavigationList::query()->where('alias',$alias)->first();
        if($data)
            return setList($data->links()->where('parent',null)->orderBy('order')->get(),$data->id);
        else
            return [];
    }
    function setList($lists, $id)
    {
        $navigationList = NavigationList::query()->find($id);
        foreach ($lists as $key => $list)
        {
            $parent = $navigationList->links()->where('parent', '=', $list->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $list->parent = $parent;
                $list->children = setList($parent, $id);
            }
        }    return $lists;
    }
}

if (!function_exists('get_panel_data')) {
    function get_panel_data($alias,$skip=null,$take=null)
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
            $panel = setItemData((array)$item->data);
        }
        return $panel;
    }
    function setItemData(array $array)
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
                        $arrayResult[$array['data'][$key][$arrayKey]][$array['header'][$key2]] = setItemData((array) $val2);
                    } else {
                        $panel = setItemData((array) $val2);
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
}
