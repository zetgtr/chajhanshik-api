@extends('layouts.admin')
@section('title','Создание визидки')
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Создание визидки</h3>
        </div>
        <div class="card-body">
            <form action="admin.vizit">
                <div class="row">
                    <div class="form-group col-lg-6">
                        <label for="logo_vizit">Лого визидки</label>
                        <input class="form-control" id="logo_vizit" name="logo_vizit" type="file">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="header_vizit">Заголовок визидки</label>
                        <input class="form-control" id="header_vizit" name="header_vizit" type="text">
                    </div>
                    <div class="form-group col-lg-12">
                        <label for="text_vizit">Текст визидки</label>
                        <textarea class="form-control" id="text_vizit" name="text_vizit" ></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
