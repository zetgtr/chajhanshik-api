@extends('layouts.admin')
@section('title',"Редактор панелей")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Список панелей</h3>
        </div>
        <x-admin.navigatin-js :links="$links" />
        <div class="card-body">
            <div class="form-group d-flex justify-content-end">
                <a href="{{ route('admin.panel.create') }}" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Добавить панель</a>
            </div>
            <div class="tab-content">

                <x-admin.panel.panel-list />
                <x-admin.panel.panel-service-list />
            </div>
        </div>
    </div>
@endsection
