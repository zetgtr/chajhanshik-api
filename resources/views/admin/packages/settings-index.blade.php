@extends('layouts.admin')
@section('title',"Редактор плагинов")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Настройки</h3>
        </div>

        <x-admin.navigation :links="$links" />
        <div class="card-body">
            <x-admin.packages.settings />
        </div>
    </div>
@endsection
