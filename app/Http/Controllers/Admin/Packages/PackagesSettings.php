<?php

namespace App\Http\Controllers\Admin\Packages;

use App\Enums\PackagesEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Packages\UpdateSettingsRequest;
use App\Models\Admin\Packages\Settings;
use App\QueryBuilder\Admin\Packages\PackagesBuilder;
use Illuminate\Http\Request;

class PackagesSettings extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PackagesBuilder $packagesBuilder)
    {
        return view('admin.packages.settings-index', [
            'links' => $packagesBuilder->getLink(PackagesEnums::SETTINGS->value)
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
    public function update(UpdateSettingsRequest $request, string $id, PackagesBuilder $packagesBuilder)
    {
        $updated = Settings::query()->find($id);
        if ($updated) {
            $updated->fill($request->validated());
        } else {
            $updated = Settings::create($request->validated());
        }

        if ($updated->save()) {
            return \redirect()->route('admin.packages_settings.index')->with('success', __('messages.admin.settings.update.success'));
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
