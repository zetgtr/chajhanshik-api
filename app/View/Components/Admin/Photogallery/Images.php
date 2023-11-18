<?php

namespace App\View\Components\Admin\Photogallery;

use App\Models\Admin\PhotoGallery\GalleryCategory;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Images extends Component
{
    public function __construct($categoryId)
    {
        $this->images = GalleryCategory::find($categoryId)->list()->orderBy('order')->get();
    }

    public function render(): View
    {
        return view('components.admin.photogallery.images',['images'=>$this->images]);
    }
}
