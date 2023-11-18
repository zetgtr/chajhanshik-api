<?php

namespace App\View\Components\Admin\Header_and_footer;

use App\QueryBuilder\Admin\HeaderAndFooter\HeaderAndFooterBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class HeaderAndFooter extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(HeaderAndFooterBuilder $headerAndFooterBuilder)
    {
        $this->data = $headerAndFooterBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.header_and_footer.header-and-footer',['data'=>$this->data]);
    }
}
