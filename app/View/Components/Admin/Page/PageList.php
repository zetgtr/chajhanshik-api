<?php

namespace App\View\Components\Admin\Page;

use App\QueryBuilder\Admin\Page\PageBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class PageList extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct($pages)
    {
        $this->pages = $pages;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.page.page-list',['pages'=>$this->pages]);
    }
}
