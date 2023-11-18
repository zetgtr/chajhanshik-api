<?php

namespace App\Models\Admin\Home;

use Illuminate\Database\Eloquent\Model;

class Metrika extends Model
{
    protected $table = "metrika";
    protected $fillable = ['key', 'counter_id','count_browser'];
}
