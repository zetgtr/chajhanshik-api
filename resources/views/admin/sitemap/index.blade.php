@extends('layouts.admin')
@section('title', "sitemap.xml")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">sitemap.xml</h3>
        </div>
        <div class="card-body">
            <div class="tab-content">
                Карта сайта генирируется автаматически при посещении данной страницы.<br> Дата последней генирации: {{ date("d.m.Y H:i") }}
                <br>
                <br>
                <a href="{{env("APP_URL")}}/sitemap.xml" target="_blank" class="btn btn-warning btn-sm">sitemap.xml</a>
            </div>
        </div>
    </div>
@endsection
