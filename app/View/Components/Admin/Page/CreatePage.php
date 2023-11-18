<?php

namespace App\View\Components\Admin\Page;

use App\QueryBuilder\RolesBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class CreatePage extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(RolesBuilder $rolesBuilder)
    {
        $this->roles = $rolesBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.page.create-page',['roles' => $this->roles]);
    }
}
