<?php

namespace App\View\Components\Admin\Users\Profile;

use App\Models\User;
use App\QueryBuilder\RolesBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Role extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(RolesBuilder $rolesBuilder,User $user)
    {
        $this->roles = $rolesBuilder->getAll();
        $this->user = $user;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.users.profile.role', ['roles'=>$this->roles,'user'=>$this->user]);
    }
}
