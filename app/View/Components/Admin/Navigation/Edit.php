<?php

namespace App\View\Components\Admin\Navigation;

use App\Models\Admin\Page\PageCreate;
use App\QueryBuilder\Admin\Page\PageBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Edit extends Component
{

    private array|Collection $pages;
    private $navigation;

    public function __construct($navigation,PageBuilder $pageBuilder)
    {
        $this->pages = $pageBuilder->getAll();
        $this->navigation = $navigation;
    }

    public function render(): View
    {
        return view('components.admin.navigation.edit', ['pages'=>$this->pages,'navigation' => $this->navigation]);
    }
}
