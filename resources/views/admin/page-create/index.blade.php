@extends('layouts.admin')
@section('title',"Создание страниц")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3 class="card-title">Редактирование страницы</h3>
                    </div>
                </div>
                <div class="card-body">
                    <x-warning />
                    <div class="row row-page-create">
                        <div class="col-md-8 order-md-first">
                            <div class="dd nestable" id="nestable">
                                <x-admin.page.page-list :pages="$pages"/>
                            </div>
                        </div>
                        <div class="col-md-4 order-md-first d-flex align-items-start justify-content-end">
                            <a href="{{ route('admin.page-create.create') }}" class="btn btn-sm btn-primary">Добавить страницу</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" id="route_dd" value="{{  route('admin.page.order') }}">
    <script src="{{asset('assets/js/admin/dnd.js')}}" ></script>
    <script src="{{asset('assets/js/admin/delete.js')}}" ></script>
@endsection
