@if(count($item) > 0)
    @foreach($item as $itemParent)
        <li @if(!$parent) class="side"@endif>
            @php
                $url = str_replace("/",".",$itemParent->url);
                $url .= $itemParent->controller_type ? "" : ".index"
            @endphp
            <a class="@if(!$parent)side-menu__item @else slide-item @endif" @if(count($itemParent->parent) > 0) data-bs-toggle="slide" @endif href="@if($itemParent->url){{ route('admin.'.$url) }} @endif">
                @if(!$parent)<i class="side-menu__icon {{ $itemParent->logo }}"></i>@endif
                <span class="side-menu__label">{{ $itemParent->name }}</span>
                @if(count($itemParent->parent) > 0)
                    <i class="angle fe fe-chevron-right"></i>
                @endif
            </a>
            @if(count($itemParent->parent) >0)
                <ul class="slide-menu">
                    <x-admin.menu.menu_item :item="$itemParent->parent" :parent="true" />
                </ul>
            @endif
        </li>
    @endforeach
@endif

