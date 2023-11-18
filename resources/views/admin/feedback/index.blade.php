@extends('layouts.admin')
@section('title',"Обратная связь")
@section('content')
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Обратная связь</h3>
        </div>
        <div class="card-body">

            <x-admin.feedback.table-feedback />
        </div>
    </div>
@endsection
