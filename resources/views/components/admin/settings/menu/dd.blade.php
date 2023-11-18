@if(count($menus) > 0)
    <ol class="dd-list">
        @foreach($menus as $item)
            <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->name}}" data-position="{{ $menu }}">
                <input type="hidden" class="route_update" value="{{  route('admin.menu.update',['menu'=>$item]) }}">
                <div class="dd-handle">
                    <span>{{$item->name}}</span>
                </div>
                <div class="dnd-edit">
                    <a href="{{route('admin.menu.destroy', ['menu'=>$item])}}" class="button-delete delete btn btn-danger btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <a href="{{route('admin.menu.edit', ['menu'=>$item])}}" class="button-edit btn btn-success btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                </div>
                @if($item->parent)
                    <x-admin.settings.menu.dd :menu="$menu" :menus="$item->parent" />
                @endif
            </li>
        @endforeach
    </ol>
@endif
