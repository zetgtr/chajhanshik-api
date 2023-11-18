@php
    $data = App\Models\Admin\HeaderAndFooter\HeaderAndFooter::first();
@endphp
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
    <meta name='description' content='@yield('description')' />
    <meta name='keywords' content='@yield('keywords')' />
    <link rel="shortcut icon" type="image/x-icon" href="/storage/icon/favicon.ico">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite('resources/css/app.css')
    @vite('resources/assets/index.scss')
    @vite('resources/js/plugins/inputmask.min.js')
    @vite('resources/js/utils/message.js')
    <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">
    <script src="{{ asset('assets/js/jquery.mini.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js"></script>
    {!! $data->header !!}
</head>
<body>

    @yield('data')
    <x-front.modal.index />
    {!! $data->footer !!}
</body>
@vite('resources/js/swiper/swiper-bundle.min.js')
@vite('resources/js/utils/wow.js')
@vite('resources/js/utils/fancybox.js')
@vite('resources/js/modal/modals.js')
</html>
