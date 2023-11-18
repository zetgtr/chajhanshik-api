@extends('layouts.admin')
@section('title',"Редактор панелей")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Редактировать панель: {{ $panel->title }}</h3>
        </div>
        <div class="card-body">
            <x-admin.panel.edit :panel="$panel" />
        </div>
    </div>
@endsection
