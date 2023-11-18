@extends('layouts.admin')
@section('title', __('admin/user.create'))
@section('content')
    <div class="row">
        <div class="card">
            <form action="{{ route('admin.user.store') }}" enctype="multipart/form-data" method="POST">
                @csrf
                <div class="card-header">
                    <div class="card-title">{{__('admin/user.create')}}</div>
                </div>
                <div class="row">
                    <x-admin.users.create.create-password/>
                    <x-admin.users.create.create-profile />
                </div>

                <div class="card-footer text-end">
                    <button type="submit" class="btn btn-success">Сохранить</button>
                </div>

                <div class="col-xl-8">

                </div>
            </form>
        </div>
    </div>
@endsection
