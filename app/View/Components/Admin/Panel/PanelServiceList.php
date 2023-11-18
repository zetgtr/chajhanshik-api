<?php

namespace App\View\Components\Admin\Panel;

use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class PanelServiceList extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(PanelBuilder $panelBuilder)
    {
        $this->panels = $panelBuilder->getServicePanels();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.panel.panel-service-list', ['panels'=> $this->panels]);
    }
}
