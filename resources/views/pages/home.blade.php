@extends('layouts.home')
@section('title', $settings->site_name)
@section('description', $settings->description)
@section('keywords', $settings->keywords)
@section('page', true)
@section('content')
    {{-- <x-front.panels.intro :intro="$intro" /> --}}
    {{-- <x-front.panels.about :about="$about" /> --}}
@endsection
