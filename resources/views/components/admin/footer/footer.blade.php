<footer class="footer">
        <div class="row align-items-center">
            <div class="col-md-12 col-sm-12 d-flex justify-content-between" style="font-size: 12px;">
                @if(!empty($settings))
                    <div class="mx-lg-6">Сайт: <a href="{{ route('home') }}">{{$settings->url}}</a>
                    @if($settings->passed)
                        | {{date('d.m.Y',strtotime($settings->passed))}}
                    @endif
                    </div>
                    <div class="mx-lg-8">Разработчик: <a href="{{$settings->developer_site}}">{{$settings->developer}}</a> | <a href="tel:{{$settings->developer_phone}}">{{$settings->developer_phone}}</a> | <a href="mailto:{{$settings->developer_email}}">{{$settings->developer_email}}</a></div>
                @endif
            </div>
        </div>
</footer>

