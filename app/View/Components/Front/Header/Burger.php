<?php

namespace App\View\Components\Front\Header;

use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class Burger extends Component
{
    private array|Collection $items;
    private array|Collection $contact;

    public function __construct(NavigationBuilder $navigationBuilder, PanelBuilder $panelBuilder)
    {
        $this->items = $navigationBuilder->getAlias('menu');
        $this->contact = $panelBuilder->getAlias("contact");;
    }


    public function render(): View
    {
        return view('components.front.header.burger',['items' => $this->items,'contact'=>$this->contact]);
    }
}
