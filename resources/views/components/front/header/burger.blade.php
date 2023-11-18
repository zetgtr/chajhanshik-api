<section class="bur" id="buger">
    <div class="container">
        <div class="bur__wrapper">
            <ul class="list-reset bur__menu">
                @foreach($items as $item)
                    <li class="nav__item">
                        <a href="{{route($item['url'])}}" data-text="{{$item['title']}}" >{{$item['title']}}</a>
                    </li>
                @endforeach
            </ul>
            <div class="bur__footer">
                <div class="address">
                    <h4 class="title">{{$contact['it']['value']}}</h4>
                    <p>
                        {!! nl2br($contact['address']['value']) !!}
                    </p>
                </div>
                <div class="contacts">
                    <a href="tel:{{$contact['phone']['value']}}">{{$contact['phone']['value']}}</a>
                    <b></b>
                    <a href="mailto:{{$contact['email']['value']}}">{{$contact['email']['value']}}</a>
                </div>
                <div class="social">
                    <a
                        href="{{$contact['vkontakte']['value']}}"
                        target="_blank"
                        class="item vk"
                    ></a>
                </div>
            </div>
        </div>
    </div>
</section>
@vite('resources/js/burger/burger.js')
