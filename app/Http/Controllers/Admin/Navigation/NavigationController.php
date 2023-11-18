<?php

namespace App\Http\Controllers\Admin\Navigation;

use App\Enums\NavigationEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Navigation\CreateLinkRequest;
use App\Http\Requests\Admin\Navigation\UpdateLinkRequest;
use App\Models\Admin\Navigation\Navigation;
use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use Illuminate\Http\Request;

class NavigationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation.index',['links' => $navigationBuilder->getLink(NavigationEnums::LINK->value)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation.create',['links' => $navigationBuilder->getLink(null)]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateLinkRequest $request)
    {
        $data = Navigation::create($request->validated());
        if ($data) {
            return \redirect()->route('admin.navigation.index')->with('success', __('messages.admin.navigation.create.success'));
        }

        return \redirect()->route('admin.navigation.create')->with('error', __('messages.admin.navigation.create.success'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Navigation $navigation, NavigationBuilder $navigationBuilder)
    {
        return view('admin.navigation.edit',['navigation'=>$navigation,'links' => $navigationBuilder->getLink(null)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLinkRequest $request, Navigation $navigation)
    {
        $navigation = $navigation->fill($request->validated());
        if ($navigation->save()) {
            return \redirect()->route('admin.navigation.edit',['navigation'=>$navigation])->with('success', __('messages.admin.navigation.update.success'));
        }

        return \back()->with('error', __('messages.admin.navigation.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Navigation $navigation)
    {
        try {
            $navigation->delete();
            $response = ['status' => true,'message' => __('messages.admin.navigation_list.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.navigation_list.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
