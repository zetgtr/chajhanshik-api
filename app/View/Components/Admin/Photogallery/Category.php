<?php

namespace App\View\Components\Admin\Photogallery;

use App\QueryBuilder\Admin\Gallery\GalleryCategoryBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Category extends Component
{
    private Collection $categories;

    public function __construct(GalleryCategoryBuilder $categoryBuilder)
    {
        $this->categories = $categoryBuilder->getAll();
    }

    public function render(): View
    {
        return view('components.admin.photogallery.category',['categories' => $this->categories]);
    }
}
