<?php

namespace App\QueryBuilder\Admin\AdminSettings;

use App\Models\Admin\AdminSettings\AdminSetting;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class AdminSettingsBuilder extends  QueryBuilder
{

    public function __construct()
    {
        $this->model = AdminSetting::query();
    }

    public function get(): Model|Collection|Builder|array|null
    {
        return $this->model->find(1);
    }

    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
