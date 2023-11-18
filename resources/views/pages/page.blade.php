@extends('layouts.inner')
@section('page',false)
@section('title',$meta['title'])
@section('description',$meta['description'])
@section('keywords',$meta['keywords'])
@section('content')
    <div class="content">
        <x-front.breadcrumbs :breadcrumbs="$bredcrambs" />
        <div class="container">
            <h2>{{ $title }}</h2>
        </div>
        <x-page :panels="$panels" />
    </div>
@endsection

