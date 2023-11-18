<?php

namespace App\View\Components\Admin\Menu;

use App\Enums\MenuEnums;
use App\QueryBuilder\MenuBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Menu extends Component
{

    private Collection $menu;
    /**
     * Create a new component instance.
     */
    public function __construct(MenuBuilder $menuBuilder)
    {
        $this->menu = $menuBuilder->getMenu(MenuEnums::LEFT);
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.menu.menu', ['menuList'=>$this->menu]);
    }
}
