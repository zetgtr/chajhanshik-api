<?php

namespace App\View\Components\Admin\Packages;

use App\QueryBuilder\Admin\Packages\PackagesBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Settings extends Component
{

    private $settings;
    /**
     * Create a new component instance.
     */
    public function __construct(PackagesBuilder $packagesBuilder)
    {
        $this->settings = $packagesBuilder->getSettings();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.packages.settings',['settings'=>$this->settings]);
    }
}
