<?php

namespace App\Http\Controllers\Admin\Page;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Page\CreateRequest;
use App\Http\Requests\Admin\Page\DataPanelCreateRequest;
use App\Http\Requests\Admin\Page\UpdateRequest;
use App\Jobs\JobSitemapGenerate;
use App\Models\Admin\Page\PageCreate;
use App\Models\Admin\Panel\DataPanel;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use Illuminate\Http\Request;
use Spatie\Sitemap\SitemapGenerator;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PageBuilder $pageBuilder)
    {
//        dispatch(new JobSitemapGenerate("https://qsgrp.com/"));
//        SitemapGenerator::create("https://qsgrp.com/")->getSitemap()->writeToDisk('public', 'sitemap.xml');
        return view('admin.page-create.index',['pages'=>$pageBuilder->getPagesParent()]);
    }

    public function getPageRouter(PageBuilder $pageBuilder)
    {
        return $pageBuilder->getPagesParent();
    }

    public function order(Request $request, PageBuilder $pageBuilder){
        $pageBuilder->setOrder($request->all()['items']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(PageBuilder $pageBuilder)
    {

        return view('admin.page-create.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $request, PageBuilder $pageBuilder)
    {
        $page = PageCreate::create($request->validated());
        if ($page) {
            $page->links()->sync($request->links);
            $pageCreate = new PageCreate();
            $pageCreate->setPanelData($request,$page);
//            $pageBuilder->createPage($page);
//            $pageBuilder->createPage($page);
            return \redirect()->route('admin.page-create.index')->with('success', __('messages.admin.page.create.success'));
        }

        return \redirect()->route('admin.page-create.create')->with('error', __('messages.admin.page.create.fail'));
    }

    /**
     * Display the specified resource.
     */
    public function show(PageCreate $page)
    {
        return $page;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PageCreate $pageCreate)
    {
        return view('admin.page-create.edit',['page'=>$pageCreate]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, PageCreate $pageCreate, PageBuilder $pageBuilder)
    {
        $pageCreate = $pageCreate->fill($request->validated());
        if ($pageCreate->save()) {
            $pageCreate->links()->detach();
            $pageCreate->links()->sync($request->links);
            $pageCreate->setPanelData($request,$pageCreate);
            return \back()->with('success', __('messages.admin.settings.update.success'));
        }

        return \back()->with('error', __('messages.admin.settings.update.fail'));
    }

    public function getReviewsLazy(Request $request){
        return view('components.front.review.item',['items' => $request->get('items'),'count'=>$request->get('count')]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PageCreate $pageCreate)
    {
        try {
            $pageCreate->delete();
            $response = ['status' => true,'message' => __('messages.admin.page.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.page.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
