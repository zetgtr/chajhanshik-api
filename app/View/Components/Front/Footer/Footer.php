<?php

namespace App\View\Components\Front\Footer;

use App\Models\Admin\Settings\Settings;
use App\QueryBuilder\Admin\HeaderAndFooter\HeaderAndFooterBuilder;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Footer extends Component
{
    public function __construct(HeaderAndFooterBuilder $headerAndFooterBuilder)
    {
        $settings = Settings::query()->find(1);
        $this->footer = $settings->footer;
        $this->podval = $headerAndFooterBuilder->get();
    }

    public function render(): View
    {
        return view('components.front.footer.footer',['currentYear'=>date('Y'),'footer'=>$this->footer,'podval'=>$this->podval->footer]);
    }
}
