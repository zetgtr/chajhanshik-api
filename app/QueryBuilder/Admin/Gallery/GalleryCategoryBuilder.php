<?php

namespace App\QueryBuilder\Admin\Gallery;

use App\Models\Admin\PhotoGallery\GalleryCategory;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class GalleryCategoryBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = GalleryCategory::query();
    }

    public function delete($id)
    {
        $category = $this->model->find($id);
        $disc = Storage::disk('public');
        $path = explode("storage",$category->image_url);
        $images = $category->list()->get();

        $imageBuilder = new GalleryImageBuilder();
        foreach ($images as $image)
            $imageBuilder->delete($image->id);

        if(count($path)>1)
            $disc->delete($path[1]);
        $category->delete();
    }

    public function getAll(): Collection
    {
        return $this->model->orderBy('order')->get();
    }
}
