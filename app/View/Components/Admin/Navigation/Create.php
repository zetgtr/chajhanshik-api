<?php

namespace App\View\Components\Admin\Navigation;

use App\Models\Admin\Page\PageCreate;
use App\QueryBuilder\Admin\Page\PageBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Create extends Component
{
    private array|Collection $pages;

    public function __construct(PageBuilder $pageBuilder)
    {
        $this->pages = $pageBuilder->getAll();
    }

    public function render(): View
    {
        return view('components.admin.navigation.create', ['pages'=>$this->pages]);
    }
}
