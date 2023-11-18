<?php

namespace App\View\Components\Admin\Navigation;

use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Navigation extends Component
{
    private Collection $navigations;
    /**
     * Create a new component instance.
     */
    public function __construct(NavigationBuilder $navigationBuilder)
    {
        $this->navigations = $navigationBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.navigation.navigation', ['navigations'=>$this->navigations]);
    }
}
