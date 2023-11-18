@if(!empty($pages) && count($pages) > 0)
    <ol class="dd-list">
        @foreach($pages as $item)
            <li class="dd-item delete-element" data-id="{{$item->id}}" data-name="{{$item->title}}">
                <div class="dd-handle">
                    <span>{{$item->title}}</span>
                </div>
                <div class="dnd-edit">
                    <a href="{{route('admin.page-create.destroy', ['page_create'=>$item])}}" class="button-delete delete btn btn-danger btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <a href="{{route('admin.page-create.edit', ['page_create'=>$item])}}" class="button-edit btn btn-success btn-xs pull-right"
                       data-owner-id="1">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                    </a>
                </div>
                @if($item->parent instanceof \Illuminate\Database\Eloquent\Collection)
                    <x-admin.page.page-list :pages="$item->parent" />
                @endif
            </li>
        @endforeach
    </ol>
@else
    <span>Страницы отсутствуют</span>
@endif
