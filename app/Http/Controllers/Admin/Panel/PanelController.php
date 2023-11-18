<?php

namespace App\Http\Controllers\Admin\Panel;

use App\Enums\PanelNavigationEnums;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Panel\CreateRequest;
use App\Http\Requests\Admin\Panel\UpdateRequest;
use App\Models\Admin\Panel\DataPanel;
use App\Models\Admin\Panel\Panel;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PanelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(PanelBuilder $panelBuilder)
    {
        return view('admin.panel.index',['links' => $panelBuilder->getLinks(PanelNavigationEnums::SITE->value)]);
    }

    public function getAllPanel(PanelBuilder $panelBuilder)
    {
        return ['status'=>true,'content'=>$panelBuilder->getPanelAll()];
    }
    public function getSelectTable(PanelBuilder $panelBuilder,Request $request)
    {
        return $panelBuilder->getSelectTable($request);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.panel.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRequest $createRequest,PanelBuilder $panelBuilder)
    {
        $panel = $createRequest->validated();
        $panelBuilder->createPanel($panel);

        $panel = Panel::create($panel);
        if ($panel) {
            return ['message'=>'Панель успешно сохранена','status'=>true,'id'=>$panel->id];
        }
        return ['message'=>'Ошибка сохранения панели','status'=>false];
    }

    public function setPhoto(Request $request){
        $file = $request->file('img');

        // Создание экземпляра Imagick изображения
        $image = new \Imagick($file->getRealPath());

        // Установка формата изображения в WebP
        $image->setImageFormat('webp');

        // Установка качества сжатия
        $image->setImageCompressionQuality(70);

        // Генерация уникального имени файла
        $fileName = 'panel/' . uniqid() . '.webp';

        // Сохранение изображения в указанном формате и диске
        $image->writeImage(public_path('storage/' . $fileName));

        // Освобождение ресурсов
        $image->clear();
        $image->destroy();

        return "/storage/" . $fileName;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $alias, PanelBuilder $panelBuilder)
    {
        return $panelBuilder->getAlias($alias);
    }

    public function publish(Panel $panel)
    {
        $panel->publish = !$panel->publish;
        if ($panel->save()) return ['status' => true, 'publish' => $panel->publish];
        else  return ['status' => false];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PanelBuilder $panelBuilder, Panel $panel)
    {
        return view('admin.panel.edit',['panel' => $panel]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequest $request, Panel $panel,PanelBuilder $panelBuilder)
    {
        $panel = $panel->fill($request->validated());
        if ($request->get('update') == 1)
            $panelBuilder->createPanel($panel);
        if ($panel->save()) {
            return ['message'=>'Панель успешно обновлена','status'=>true,'id'=>$panel->id];
        }

        return ['message'=>'Ошибка обновления панели','status'=>false];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Panel $panel, PanelBuilder $panelBuilder)
    {
        try {
            $panelBuilder->removePanel($panel);
            $dataPanel = DataPanel::query()->where('id_panel',$panel->id)->first();
            if(!empty($dataPanel->id))
            {
                $dataPanel->delete();
            }
            $panel->delete();
            $response = ['status' => true,'message' => __('messages.admin.news.destroy.success')];
        } catch (Exception $exception)
        {
            $response = ['status' => false,'message' => __('messages.admin.news.destroy.fail').$exception->getMessage()];
        }

        return $response;
    }
}
