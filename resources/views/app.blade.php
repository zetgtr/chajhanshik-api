@php
    $settings = \App\Models\Admin\Settings\Settings::query()->find(1)
@endphp
<!DOCTYPE html>
<html>
    <head>
{{--        <link rel="shortcut icon" type="image/x-icon" href="{{ $settings->site_banner }}">--}}

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        @routes

        @vite('resources/css/app.css')
        @vite('resources/assets/index.scss')
        <link rel="stylesheet" href="{{ asset('assets/iconfonts/font-awesome/css/font-awesome.min.css') }}">
        @vite('resources/js/app.js')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
