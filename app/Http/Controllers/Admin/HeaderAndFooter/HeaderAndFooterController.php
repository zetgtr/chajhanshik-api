<?php

namespace App\Http\Controllers\Admin\HeaderAndFooter;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\HeaderAndFooter\UpdateRequest;
use App\Models\Admin\HeaderAndFooter\HeaderAndFooter;
use App\QueryBuilder\Admin\HeaderAndFooter\HeaderAndFooterBuilder;
use Illuminate\Http\Request;

class HeaderAndFooterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(HeaderAndFooterBuilder $headerAndFooterBuilder)
    {
        return view('admin.header-and-footer.index',['data'=>$headerAndFooterBuilder->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, HeaderAndFooter $headerAndFooter,HeaderAndFooterBuilder $headerAndFooterBuilder)
    {

        $headerAndFooter = $headerAndFooter->fill($request->validated());
        if ($headerAndFooter->save()) {
            return \redirect()->route('admin.header-and-footer.index',['data'=>$headerAndFooterBuilder->get()])->with('success', __('messages.admin.header_and_footer.update.success'));
        }

        return \back()->with('error', __('messages.admin.header_and_footer.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
