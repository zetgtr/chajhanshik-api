@extends('layouts.admin')
@section('title',"Навигация")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Создание</h3>
        </div>

        <x-admin.navigation :links="$links" />
        <div class="card-body">
            <x-admin.navigation.create-list />
        </div>
    </div>
@endsection
