<?php

namespace App\QueryBuilder\Admin\Gallery;

use App\Models\Admin\PhotoGallery\GalleryImage;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Storage;

class GalleryImageBuilder extends QueryBuilder
{
    public function __construct()
    {
        $this->model = GalleryImage::query();
    }

    public function delete($id)
    {
        $image = GalleryImage::query()->find($id);
        $disc = Storage::disk('public');
        $path = explode("storage",$image->image_url);
        if(count($path)>1)
            $disc->delete($path[1]);
        $image->delete();
    }

    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }
}
