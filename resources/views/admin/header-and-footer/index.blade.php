@extends('layouts.admin')
@section('title',"Шапка и подвал")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3 class="card-title">Редактирование шапки и подвала для вставки скриптов</h3>
                    </div>
                </div>
                <x-admin.header_and_footer.header-and-footer :data="$data" />
            </div>
        </div>
    </div>
@endsection
