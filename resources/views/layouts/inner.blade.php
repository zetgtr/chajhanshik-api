@extends('layouts.base')
@section('data')
    <div class="innerLayout">
        <x-front.header.header />
{{--        <x-front.header.burger />--}}
        @yield('content')
        <div id="messages"></div>
        <x-front.footer.footer />
        <x-front.modal.index />
    </div>
@endsection
