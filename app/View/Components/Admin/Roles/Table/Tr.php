<?php

namespace App\View\Components\Admin\Roles\Table;

use App\Models\Admin\Roles;
use App\QueryBuilder\MenuBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Tr extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(Roles $role)
    {
        $this->role = $role;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.roles.table.tr',['role' => $this->role]);
    }
}
