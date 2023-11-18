<?php

namespace App\Models\Admin\Panel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panel extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'alias',
        'type',
        'data',
        'service',
        'publish'
    ];
}
