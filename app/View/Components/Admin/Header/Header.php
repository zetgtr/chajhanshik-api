<?php

namespace App\View\Components\Admin\Header;

use App\Models\Admin\Settings\Settings;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Header extends Component
{

    private $settings;

    public function __construct()
    {
        $this->settings = Settings::query()->find(1);
    }


    public function render(): View
    {
        return view('components.admin.header.header',['settings'=>$this->settings]);
    }
}
