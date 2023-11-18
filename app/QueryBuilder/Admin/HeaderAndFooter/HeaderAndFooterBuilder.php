<?php

namespace App\QueryBuilder\Admin\HeaderAndFooter;

use App\Models\Admin\HeaderAndFooter\HeaderAndFooter;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class HeaderAndFooterBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->model = HeaderAndFooter::query();
    }

    public function get(){
        return $this->model->find(1);
    }
    public function getAll(): Collection
    {
        return $this->model->get();
    }
}
