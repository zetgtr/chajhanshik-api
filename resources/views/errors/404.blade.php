@extends('layouts.home')

@section('title','Страница не найдена')
@section('content')
<div class="e404">
    <div class="scene">
        <div class="box">
            <div class="box__face front">4</div>
            <div class="box__face back">4</div>
            <div class="box__face right">0</div>
            <div class="box__face left">4</div>
            <div class="box__face top">Error</div>
            <div class="box__face bottom">0</div>
        </div>
        <div class="shadow"></div>
    </div>
    <div class="desc">
        <h2>Данной страницы не существует.</h2>
        <a href='{{ route('home') }}' class="button button-click button--orange first__btn">
            <span>Вернуться на главную</span>
            <b>
            </b>
            <s></s>
        </a>

    </div>
</div>

@endsection
