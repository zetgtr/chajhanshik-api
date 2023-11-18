<?php

namespace App\Http\Controllers\Admin\Robot;

use App\Http\Controllers\Controller;
use App\Services\RobotsTxtService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RobotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(RobotsTxtService $robotsTxtService)
    {
        $robotsTxt = $robotsTxtService->getRobotsTxt();
        return view('admin.robot.index', compact('robotsTxt'));
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
    public function update(Request $request, string $id)
    {
        $txt = $request->input('robots_content');
        Storage::disk('robot')->put('robots.txt', $txt);
        return redirect()->back()->with('success', 'Файл robots.txt успешно обновлен');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
