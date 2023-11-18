<?php

namespace App\View\Components\Admin\Navigation;

use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class CreateList extends Component
{
    private $link;
    /**
     * Create a new component instance.
     */
    public function __construct(NavigationBuilder $navigationBuilder)
    {
        $this->link = $navigationBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.navigation.create-list', ['link'=>$this->link]);
    }
}
