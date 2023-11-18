@extends('layouts.auth')
@section('title',__('Forgot title'))
@section('content')
    <form class="login100-form validate-form" method="POST" action="{{ route('password.email') }}">
        @csrf
        <span class="pb-5">
            {{ __('Forgot title') }}
        </span>
        <p class="text-muted">{{ __('Forgot text') }}</p>
        <div class="input-group">
            <div class="input-group-text bg-white text-muted">
                <i class="fad fa-envelope"></i>
            </div>
            <input class="form-control input_panel" name="email" value="{{ old('email') }}" type="email" placeholder="{{__('Email address')}}">
        </div>

        <button type="submit" class="btn btn-primary btn_email">{{ __('Submit') }}</button>

        <div class="text-center mt-4">
            <p class="text-dark mb-0">{{__("Forgot It?")}}<a class="text-primary ms-1" href="{{ route('login') }}">{{__('Sign In')}}</a></p>
        </div>
    </form>
@endsection
