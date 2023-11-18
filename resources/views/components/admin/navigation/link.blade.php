@if(count($link) > 0)
    <ol class="dd-list">
        @foreach($link as $item)
            <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->title}}">
                <div class="dd-handle">
                    <span>{{$item->title}}</span>
                </div>
                @if($item->parent instanceof \Illuminate\Database\Eloquent\Collection)
                    <x-admin.navigation.link :link="$item->parent" />
                @endif
            </li>
        @endforeach
    </ol>
@endif

@if(count($link) == 0)
    <div class="dd-empty"></div>
@endif
