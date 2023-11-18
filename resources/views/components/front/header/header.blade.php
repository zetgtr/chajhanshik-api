{!! $header !!}
<header id="header" class="header">
    <div class="container header-container">
        <div class="header__wrapper">
            <div class="header__logo">
                <a href="{{ route('home') }}">
                    <img src="{{ $logo }}" alt="Logo">
                </a>
            </div>
            <nav class="nav">
                <ul class="list-reset nav__list">
                    @foreach($menus as $menu)
                        <li class="nav__item">
                            <a data-text="{{$menu->title}}" href="{{ route($menu->url) }}">{{$menu->title}}</a>
                        </li>
                    @endforeach
                </ul>
            </nav>
            <div class="header__right">
                <a class="header__num" href="tel:+7 905 262 49 68">+7 905 262 49 68</a>
            </div>
        </div>
        <button class="burger btn-reset" id="burger-btn">
            <span class="line"></span>
            <span class="line"></span>
        </button>
    </div>
</header>
