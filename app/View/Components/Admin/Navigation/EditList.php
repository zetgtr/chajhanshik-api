<?php

namespace App\View\Components\Admin\Navigation;

use App\QueryBuilder\Admin\Navigation\NavigationBuilder;
use App\Models\Admin\Navigation\NavigationList;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class EditList extends Component
{
    private NavigationList $navigation;
    private Collection $link;
    private mixed $list;

    public function __construct(NavigationList $navigation, NavigationBuilder $navigationBuilder)
    {
        $this->navigation = $navigation;
        $this->link = $navigationBuilder->getNavigationLinks($navigation->id);
        $this->list = $navigationBuilder->setList($this->navigation->links()->where('parent',null)->orderBy('order')->get(),$navigation->id);
    }


    public function render()
    {
        return view('components.admin.navigation.edit-list',[
            'navigation'=>$this->navigation,
            'link'=>$this->link,
            'linksEdit' => $this->list
            ]);
    }


}
