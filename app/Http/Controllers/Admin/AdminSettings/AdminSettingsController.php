<?php

namespace App\Http\Controllers\Admin\AdminSettings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AdminSettings\UpdateRequest;
use App\Models\Admin\AdminSettings\AdminSetting;
use App\Models\Admin\Home\Metrika;
use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\Admin\AdminSettings\AdminSettingsBuilder;
use Illuminate\Http\Request;

class AdminSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(AdminSettingsBuilder $settingsBuilder)
    {
        return view('admin.admin_settings.index',[
            'settings'=>$settingsBuilder->get(),
            'key'=>app('firebase.database')->getReference('/metrika/key')->getValue()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function update(UpdateRequest $request, int $id)
    {
        $updated = AdminSetting::query()->updateOrCreate(['id' => $id], $request->validated());
        $database = app('firebase.database');
        $ref = $database->getReference('/metrika/key');
        $ref->set($request->get('key'));
        if ($updated->save()) {
            return \redirect()->route('admin.admin_settings.index')->with('success', __('messages.admin.settings.update.success'));
        }

        return \back()->with('error', __('messages.admin.settings.update.fail'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
