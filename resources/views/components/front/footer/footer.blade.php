<footer class="footer">
    <div class="container footer-container">
        <div class="footer__wrapper">
            <p>2014-{{date('Y') ." ". $footer }}</p>
            <p>Аккредитованная IT-компания</p>
            @if(Route::has('privacy'))
                <a href="{{ route('privacy') }}"><span>Политика конфиденциальности</span></a>
            @endif
        </div>
    </div>
</footer>
{!! $podval !!}
