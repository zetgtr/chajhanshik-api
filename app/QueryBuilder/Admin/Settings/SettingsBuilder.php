<?php

namespace App\QueryBuilder\Admin\Settings;


use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class SettingsBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = Settings::query();
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
