<?php

namespace App\Http\Controllers\Admin\Navigation;

use App\Enums\NavigationEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Navigation\CreateRequest;
use App\Http\Requests\Admin\Navigation\UpdateRequest;
use App\Models\Admin\Navigation\NavigationList;
use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use Illuminate\Http\Request;

class NavigationListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation-list.index',['links' => $navigationBuilder->getLink(NavigationEnums::LIST->value)]);
    }

    public function getPage(NavigationBuilder $navigationBuilder)
    {
        return $navigationBuilder->getListAll();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation-list.create',['links' => $navigationBuilder->getLink(null)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request)
    {
        $data = NavigationList::create($request->validated());
        if ($data) {
            return \redirect()->route('admin.navigation_list.index')->with('success', __('messages.admin.navigation_list.create.success'));
        }

        return \redirect()->route('admin.navigation_list.create')->with('error', __('messages.admin.navigation_list.create.success'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function setLink(Request $request,int $id, NavigationBuilder $navigationBuilder)
    {
        return $navigationBuilder->setLink($request->all(),$id);
    }

    public function getAlias(string $alias, NavigationBuilder $navigationBuilder)
    {
        return $navigationBuilder->getAlias($alias);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NavigationList $navigationList,NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation-list.edit',[
            'navigation'=>$navigationList,
            'links' => $navigationBuilder->getLink(null)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, NavigationList $navigationList)
    {
        $navigationList = $navigationList->fill($request->validated());
        if ($navigationList->save()) {
            return \redirect()->route('admin.navigation_list.edit',['navigation_list'=>$navigationList])->with('success', __('messages.admin.navigation_list.update.success'));
        }

        return \back()->with('error', __('messages.admin.navigation_list.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NavigationList $navigationList)
    {
        try {
            $navigationList->delete();
            $response = ['status' => true,'message' => __('messages.admin.navigation_list.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.navigation_list.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
