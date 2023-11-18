<?php

namespace App\Http\Controllers\Admin\Packages;

use App\Enums\PackagesEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Packages\EditRequest;
use App\Models\Admin\Packages\Packages;
use App\QueryBuilder\Admin\Packages\PackagesBuilder;
use Illuminate\Http\Request;



class PackagesController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(PackagesBuilder $packagesBuilder)
    {
        return view('admin.packages.index', [
            'packages'=>$packagesBuilder->getPackages(),
            'packagesInstall' => $packagesBuilder->getInstall(),
            'links'=>$packagesBuilder->getLink(PackagesEnums::EDIT->value)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->merge(['publish'=>false]);
        $database = app('firebase.database');
        $ref = $database->getReference('/packages');
        if($ref->push($request->all()))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Плагин успешно добавлен");
        }else{
            return \redirect()->route('admin.packages.index')->with('error', "Ошибка добавления");
        }
    }

    public function setData(Request $request, PackagesBuilder $packagesBuilder)
    {
        $data = $packagesBuilder->setData($request->input('id'));
        if ($data['status'])
            return ['type'=>'success','message'=> "Плагин успешно установлен!"];
        else
            return ['type'=>'error','message'=> "Ошибка установки плагина: ".$data['message']];

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, PackagesBuilder $packagesBuilder)
    {
        if($request->input("packages_install"))
        {
            if(Packages::query()->where('id_package',$request->input("packages_install"))->first())
                return ['type'=>"error",'message' => "Плагин уже установлен!"];
            if($packagesBuilder->install($request) == 0)
            {
                $id = $request->input("packages_install");
                Packages::query()->create(['id_package'=>$id]);
                return ['type'=>"success",'route'=> route('admin.packages.set-data',['id'=>$request->input("packages_install")])];
            }
            return ['type'=>"error",'message'=>"Ошибка установки плагина!"];
        }
        return ['type'=>"error",'message'=>"Не выбран плагин для установки!"];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, PackagesBuilder $packagesBuilder)
    {
        return $packagesBuilder->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, EditRequest $request, PackagesBuilder $packagesBuilder)
    {
        if($packagesBuilder->edit($id, $request))
        {
            return \redirect()->route('admin.packages.index')->with('success', "Плагин успешно обновлен");
        }
        return \redirect()->route('admin.packages.index')->with('error', "Ошибка обновления плагина");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id,PackagesBuilder $packagesBuilder, Request $request)
    {
        if($packagesBuilder->remove($request->input("packages")))
        {
            return ['type'=>'success','message'=> "Плагин успешно удален!"];
        }
        return ['type'=>'error','message'=> "Ошибка удаления плагина!"];
    }
}
