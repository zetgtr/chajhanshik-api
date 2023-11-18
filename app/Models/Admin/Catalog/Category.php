<?php

namespace App\Models\Admin\Catalog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = "catalog_categories";
    protected $fillable = [
        'title',
        'description',
        'url',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'images',
        'parent',
        'order',
        'publish',
        'access'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'catalog_category_has_product')->withPivot('order', 'publish')->orderBy('order');
    }
}
