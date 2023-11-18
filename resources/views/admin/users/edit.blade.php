@extends('layouts.admin')
@section('title', __('admin/user.edit',['name'=>$user->name]))
@section('content')
        <div class="row">
            <div class="card">
                <form action="{{ route('admin.user.update', ['user'=>$user]) }}" enctype="multipart/form-data" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="card-header">
                        <div class="card-title">Редактировать пользователя</div>
                    </div>
                    <div class="row">
                        <x-admin.users.profile.edit-password :user="$user"/>
                        <x-admin.users.profile.edit-profile :user="$user" />
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
