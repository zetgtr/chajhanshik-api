@extends('layouts.admin')
@section('title',"Главные настройки")
@section('content')
    <div class="card">
        <div class="card-header card-header-divider">
            <div>
                <h3 class="card-title">Главные настройки</h3>
            </div>
        </div>
        <form action="{{ route('admin.settings.update', ['setting' => 1]) }}" method="POST" enctype="multipart/form-data" class="row card-body">
            @csrf
            @method('PUT')
            <x-warning />
            <div class="col-xl-4">
              <x-admin.settings_global.name-site :settings="$settings" :metrika="$metrika" />
            </div>
            <div class="col-xl-8">
                <x-admin.settings_global.info :settings="$settings" />
            </div>
            <div>
                <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
            </div>
        </form>
    </div>
@endsection
