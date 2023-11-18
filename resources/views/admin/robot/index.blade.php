@extends('layouts.admin')
@section('title',"robots.txt")
@section('content')
    <div class="row">
        <div class="col-xl-12">
            <div class="card">
                <div class="card-header card-header-divider">
                    <div>
                        <h3  class="card-title">robots.txt</h3>
                        <span class="card-header-subtitle">Вы можете найти более подробную информацию и помощь о robots.txt <a href="http://www.robotstxt.org/" target="_blank">здесь</a></span>
                    </div>
                </div>
                <form action="{{ route('admin.robot.update', ['robot'=>1]) }}" method="POST" class="card-body">
                    <x-warning />
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <textarea name="robots_content" id="robots_content" rows="20" class="form-control fz13">{{ $robotsTxt }}</textarea>
                    </div>
                    <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
                </form>
            </div>
        </div>
    </div>
@endsection
