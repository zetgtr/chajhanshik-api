@foreach ($panels as $item)
    @if ($item->display)
        @switch($item->type)
            @case('text')
                <div class="page-wrapper">
                    {!! $item->content !!}
                </div>
                @break
            @case('document')
                <x-front.documents.document :document="$item->contentParse" />
                @break
            @case('panel')
                @include('components.front.panels.' . $item->alias, [
                    $item->alias => $item->content,
                ])
                @break
            @case('section')
                <section id="section_page section_{{ $item->content }}">
                    <x-page :panels="$item->_child" />
                </section>
        @endswitch
    @endif
@endforeach
