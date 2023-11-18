<?php

namespace App\View\Components\Auth;

use App\Models\Admin\Settings\Settings;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Login extends Component
{
    public function __construct()
    {
        $this->settings = Settings::query()->find(1);
    }

    public function render(): View
    {
        return view('components.auth.login',['logo'=>$this->settings->site_banner]);
    }
}
