<?php

namespace App\QueryBuilder\Admin\FeedBack;

use App\Models\Admin\FeedBack;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class FeedBackBuilder extends QueryBuilder
{
    public Builder $model;
    public function __construct()
    {
        $this->model = FeedBack::query();
    }

    public function getAll(): Collection
    {
       return $this->model->get();
    }

    public function deleteTemp()
    {
        $folderPath = storage_path('app/public/temp');

        if (file_exists($folderPath)) {
            $files = glob($folderPath . '/*');
            foreach ($files as $file) {
                if (is_file($file)) {
                    unlink($file);
                }
            }
        }
    }
    public function setForm(array $form)
    {
        FeedBack::create(['name'=>$form['name'],'phone'=>$form['tel'],'email'=>$form['email'],'pages'=>$form['pages']]);
    }
}
