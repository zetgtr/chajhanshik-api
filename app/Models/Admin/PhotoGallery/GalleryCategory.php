<?php

namespace App\Models\Admin\PhotoGallery;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class GalleryCategory extends Model
{
    use HasFactory;
    protected $fillable = ['id','title','description','image_url'];
    protected $primaryKey = 'id';

    public function list(): BelongsToMany
    {
        return $this->belongsToMany(GalleryImage::class, 'gallery_categories_has_gallery_images',
            'category_id','image_id', 'id', 'id');
    }
}
