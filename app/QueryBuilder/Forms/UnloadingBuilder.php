<?php

declare(strict_types=1);

namespace App\QueryBuilder\Forms;

use App\Models\Forms\Unloading;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Pagination\LengthAwarePaginator;

class UnloadingBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = Unloading::query();
    }

    public function getUnloadingPagination(int $quantity = 10): LengthAwarePaginator
    {
        return $this->model->orderByDesc('id')->paginate($quantity);
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }
}
