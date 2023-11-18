@extends('layouts.admin')
@section('title','Настройки админки')
@section('content')
    <div class="card">
        <div class="card-header card-header-divider">
            <div>
                <h3 class="card-title">Настройки админки</h3>
            </div>
        </div>
        <form action="{{ route('admin.admin_settings.update', ['admin_setting' => 1]) }}" method="POST" enctype="multipart/form-data" class="row card-body">
            @csrf
            @method('PUT')
            <x-warning />
            <x-admin.settings_admin.index :settings="$settings" :key="$key" />
            <div>
                <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
            </div>
        </form>
    </div>
@endsection
