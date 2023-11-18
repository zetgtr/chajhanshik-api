<?php

namespace App\Models\Admin\Catalog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;
    protected $table = "catalog_products";
    protected $fillable = [
        'title',
        'content',
        'characteristics',
        'url',
        'price',
        'seo_title',
        'seo_description',
        'seo_keywords',
        'images',
        'access',
        'new',
        'hit'
    ];

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'catalog_category_has_product',
            'product_id', 'category_id', 'id', 'id');
    }

}
