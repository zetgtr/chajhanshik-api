<?php

namespace App\View\Components\Admin\Footer;

use App\QueryBuilder\Admin\AdminSettings\AdminSettingsBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\View\Component;

class Footer extends Component
{
    private array|null|Builder|Collection|Model $settings;

    public function __construct(AdminSettingsBuilder $settingsBuilder)
    {
        $this->settings = $settingsBuilder->get();
    }

    public function render(): View
    {
        return view('components.admin.footer.footer',['settings'=>$this->settings]);
    }
}
