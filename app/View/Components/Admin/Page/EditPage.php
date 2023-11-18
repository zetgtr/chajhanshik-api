<?php

namespace App\View\Components\Admin\Page;

use App\Models\Admin\Page\PageCreate;
use App\QueryBuilder\Admin\Page\PageBuilder;
use App\QueryBuilder\Admin\Page\PageDataPanelBuilder;
use App\QueryBuilder\RolesBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class EditPage extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct($page, PageDataPanelBuilder $panelBuilder,RolesBuilder $rolesBuilder)
    {
        $this->page = $page;
        $this->datahub = $panelBuilder->getPagePanels($page->id);
        $this->roles = $rolesBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.page.edit-page', ['page'=>$this->page, 'datahub' => json_encode($this->datahub),'roles' => $this->roles]);
    }
}
