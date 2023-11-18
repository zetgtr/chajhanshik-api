<?php

namespace App\QueryBuilder\Admin\Packages;

use App\Enums\PackagesEnums;
use App\Http\Requests\Admin\Packages\EditRequest;
use App\Models\Admin\Packages\Packages;
use App\Models\Admin\Packages\Settings;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use News\Remove\RemovePackage;
use function Clue\StreamFilter\remove;

class PackagesBuilder extends QueryBuilder
{

    private $firebase;

    private Builder $settings;

    public function __construct()
    {
        $this->firebase = app('firebase.database');
        $this->settings = Settings::query();
    }

    public function getLink($key)
    {
        $links = [PackagesEnums::EDIT->value => ['url'=> route('admin.packages.index'), 'name' => 'Редактировать'],
            PackagesEnums::SETTINGS->value => ['url'=> route('admin.packages_settings.index'),  'name' => 'Настройки']
        ];

        $links[$key]['active'] = true;

        return $links;
    }

    public function getPackages()
    {
        return $this->firebase->getReference('/packages')->getValue();
    }
    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }

    public function getSettings()
    {
        return $this->settings->find(1);
    }

    public function install($request)
    {
        $id = $request->input("packages_install");
        $settings = $this->getSettings();
        $package = $settings->user."/".$this->firebase->getReference('/packages/'.$id."/name")->getValue();
//        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();

        $composerJson = json_decode(File::get(base_path('composer.json')), true);

        $composerJson['repositories'][] = [
            "type" => "vcs",
            "url" => "https://{$settings->url}/$package",
        ];

        File::put(base_path('composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT));

        chdir(base_path());
        try {
            if(!$settings->docker) exec($settings->php.'\php.exe '.$settings->composer.'\composer.phar require '.$package.' --ignore-platform-req=ext-sodium 2>&1', $msg, $resultCode);
            else exec('composer require '.$package.' 2>&1', $msg, $resultCode);
        } catch (\Exception $exception)
        {
            return ['type'=>"error",'message'=>"Ошибка установки плагина: ".$exception->getMessage()];
        }

        return $resultCode;
    }

    public function setData($id)
    {
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        chdir(base_path());
        try {
            if($packageData['migration']) {
                Artisan::call('vendor:publish', [
                    '--provider' => $packageData['provider'],
                    '--tag' => 'migrations',
                ]);
                Artisan::call('migrate', ['--verbose' => true]);
            }
            if($packageData['seeder'])
            {
                Artisan::call('db:seed', [
                    '--class' => $packageData['name_seeder'],
                ]);
            }
            if($packageData['script'])
            {
                Artisan::call('vendor:publish', [
                    '--provider' => $packageData['provider'],
                    '--tag' => 'script',
                ]);
            }
            if($packageData['vue'])
            {
                Artisan::call('vendor:publish', [
                    '--provider' => $packageData['provider'],
                    '--tag' => 'vue',
                ]);
            }
            if($packageData['view'])
            {
                Artisan::call('vendor:publish', [
                    '--provider' => $packageData['provider'],
                    '--tag' => 'view',
                ]);
            }
            return ['status'=>true];
        }catch (\Exception $exception)
        {
            $this->remove($id);
            return ['status'=>false,"message"=>$exception->getMessage()];
        }
    }

    public function edit(string $id, EditRequest $request)
    {
        return $this->firebase->getReference('/packages/'.$id)->update($request->validated());
    }

    public function show(string $id)
    {
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        if ($packageData)
        {
            $packageData['status'] = true;
        }else{
            $packageData['status'] = false;
        }
        return $packageData;
    }

    public function getInstall()
    {
        return Packages::query()->get();
    }

    public function remove($id)
    {
        $packageData = $this->firebase->getReference('/packages/'.$id)->getValue();
        $settings = $this->getSettings();

        if (class_exists($packageData['delete'])) {
            $packageRemove = new $packageData['delete']();
            $packageRemove->run($settings, true, true);
        }

        $composerJson = json_decode(File::get(base_path('composer.json')), true);
        if(!empty($composerJson["repositories"]) && count($composerJson["repositories"])>1)
        {
            $key = array_search([
                "type" => "vcs",
                "url" => "https://".$packageData['url']."/".$settings->user."/".$packageData['name']
            ], $composerJson["repositories"]);
            if ($key !== false) {
                array_splice($composerJson["repositories"], $key, 1);
            }
        }else{
            unset($composerJson['repositories']);
        }
        unset($composerJson['require'][$settings->user.'/'.$packageData['name']]);

        File::put(base_path('composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT));
        if(!$settings->docker) exec($settings->php.'\php.exe '.$settings->composer.'\composer.phar update');
        else exec('composer update');
        Packages::query()->where('id_package',$id)->delete();
        return true;
    }


}
