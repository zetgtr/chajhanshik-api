<div class="container">
    <div class="breadcrumbs">
        @foreach($breadcrumbs as $index=>$item)
            @if($index === count($breadcrumbs) - 1)
                <span>{{ $item['title'] }}</span>
            @else
                <a href="{{$item['url']}}">
                    <span>{{ $item['title'] }}</span>
                </a>
                <span> > </span>
            @endif
        @endforeach
    </div>
</div>
