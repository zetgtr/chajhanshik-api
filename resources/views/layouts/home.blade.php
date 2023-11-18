@extends('layouts.base')
@section('data')
    <x-front.header.header />
    @yield('content')
    <div id="messages"></div>
    <x-front.footer.footer />
    <x-front.modal.index />
@endsection
