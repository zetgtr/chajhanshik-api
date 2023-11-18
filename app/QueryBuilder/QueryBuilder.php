<?php

declare(strict_types=1);

namespace App\QueryBuilder;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

abstract class QueryBuilder
{
    public Builder $model;
    abstract public function getAll(): Collection;
}
