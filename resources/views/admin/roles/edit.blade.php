@extends('layouts.admin')
@section('title',"Редактирование роли")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <x-admin.roles.edit />
            </div>
        </div>
    </div>
@endsection
