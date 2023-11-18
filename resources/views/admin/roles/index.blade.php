@extends('layouts.admin')
@section('title', 'Роли')
@section('content')
    <div class="row row-cards">
        <div class="col-lg-12 col-xl-12">
{{--            <x-admin.content.search />--}}
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3  class="card-title">Роли</h3>
                    </div>
                </div>
                <input type="hidden" id="app_url" value="{{ env('APP_URL') }}">
                <x-admin.roles.header :roles="$roles" />
                <div class="e-table px-5 pb-5">
                    <div class="table-responsive table-lg">
                        <table class="table border-top table-bordered mb-0">
                            <x-admin.roles.table.head />
                            <tbody>
                            @foreach($roles as $role)
                                <x-admin.roles.table.tr :role="$role"/>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <x-admin.modal title="{{ __('Add role') }}" id="fall_role" />
    <x-admin.roles.add-role />
    <x-admin.roles.edit-role />
    <script src="{{ asset('assets/js/admin/roles/edit.js') }}"></script>
    <script src="{{ asset('assets/js/admin/roles/add.js') }}"></script>
{{--    <x-admin.roles.modal />--}}
@endsection
