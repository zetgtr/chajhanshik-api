@foreach($items as $item)
<div class="porfolio__item">
    <a class="main-container shadow-bottom" href="{{$item['subtitle']}}" target="_blank" rel="noopener" onclick='ym(17203984, "reachGoal", "{{$item['metrika']}}"); return true;'>
        <img src="{{$item['img']}}" alt="" />
        <div class="contentBx">
            <div>
                <img src="{{$item['bg_img']}}" alt="" />
            </div>
        </div>
    </a>
    @if($item['medal'])
    <div class="medal">{!! $item['medal'] !!}</div>
    @endif
    <a class="porfolio__item-mobile">
        <img src="{{$item['img_mobile']}}" alt="" />
    </a>
    <div class="porfolio__item__logo">
        <img src="{{$item['img_logo']}}" alt="" />
    </div>
    <div class="porfolio__item__text">
        <span>{{ $item['title'] }}</span>
        <a>{{ $item['subtitle'] }}</a>
    </div>
</div>
@endforeach

@vite('resources/js/utils/portfolio.js')
