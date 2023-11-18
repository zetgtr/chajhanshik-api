<?php

namespace App\Models\Admin\Catalog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $table = "catalog_settings";
    protected $fillable = [
        'title',
        'description',
        'url',
        'seo_title',
        'seo_description',
        'seo_keywords'
    ];
}
