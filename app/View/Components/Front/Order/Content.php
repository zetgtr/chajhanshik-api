<?php

namespace App\View\Components\Front\Order;

use App\QueryBuilder\Admin\Panel\PanelBuilder;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Content extends Component
{
    private string $title;
    private string $desc;
    private array $contact;
    public function __construct(array $order,PanelBuilder $panelBuilder)
    {
        $this->title = nl2br($order[0]['title']);
        $this->desc = nl2br($order[0]['desc']);
        $this->contact = $panelBuilder->getAlias("contact");
    }

    public function render(): View
    {
        return view('components.front.order.content',['title' => $this->title,'desc'=>$this->desc,'contact'=>$this->contact]);
    }
}
