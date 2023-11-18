@extends('layouts.admin')
@section('title',"Редактор панелей")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Параметры панели</h3>
        </div>
        <div class="card-body">
            <x-admin.panel.create />
        </div>
    </div>
@endsection
