@extends('layouts.admin')
@section('title', __('admin/page.dashboard'))
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3 class="card-title">{{__('admin/page.dashboard')}}</h3>
                    </div>
                </div>
                <div class="card-body">
                    <p>Для просмотра аналитики добавите счетчик в <a href="{{ route('admin.settings.index') }}">главных настройках</a> </p>
                </div>
            </div>
        </div>
    </div>
@endsection
