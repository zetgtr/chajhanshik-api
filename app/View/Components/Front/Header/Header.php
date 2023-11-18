<?php

namespace App\View\Components\Front\Header;

use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\Admin\HeaderAndFooter\HeaderAndFooterBuilder;
use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Header extends Component
{
    public function __construct(NavigationBuilder $navigationBuilder,HeaderAndFooterBuilder $headerAndFooterBuilder)
    {
        $this->menus = $navigationBuilder->getAlias('menu');
        $this->settings = Settings::query()->find(1);
        $this->header = $headerAndFooterBuilder->get();
    }

    public function render(): View
    {
        return view('components.front.header.header',['menus'=>$this->menus, 'logo'=>$this->settings->site_banner,'header'=>$this->header->header]);
    }
}
