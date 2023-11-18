<?php

namespace App\Models\Admin\PhotoGallery;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class GalleryImage extends Model
{
    use HasFactory;

    protected $fillable = ['id','title','description','image_url'];
    protected $casts = [
        'category_id' => 'integer',
    ];

    public function list(): BelongsToMany
    {
        return $this->belongsToMany(GalleryCategory::class, 'gallery_categories_has_gallery_images',
             'image_id','category_id', 'id', 'id');
    }
}
