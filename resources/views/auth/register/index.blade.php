@extends('layouts.auth')
@section('title', __('auth.register'))
@section('content')
            <div class="container-login100">
                <div class="wrap-login100 p-6">
                    <form class="login100-form validate-form" method="POST" action="{{ route('register') }}">
                        @csrf
                        <span class="login100-form-title">
							{{__('auth.register')}}
						</span>
                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                <i class="mdi mdi-account" aria-hidden="true"></i>
                            </a>
                            <input class="input100 border-start-0 ms-0 form-control @error('name') is-invalid @enderror" type="text" name="name" value="{{old('name')}}" placeholder="{{ __('Name') }}">
                            <x-error error-value="name" />
                        </div>
                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                <i class="zmdi zmdi-email" aria-hidden="true"></i>
                            </a>
                            <input class="input100 border-start-0 ms-0 form-control @error('email') is-invalid @enderror" type="email" name="email" placeholder="{{__('Email Address')}}">
                            <x-error error-value="email" />
                        </div>
                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                <i class="zmdi zmdi-eye" aria-hidden="true"></i>
                            </a>
                            <input class="input100 border-start-0 ms-0 form-control @error('password') is-invalid @enderror" name="password" type="password" placeholder="{{__('Password')}}">
                            <x-error error-value="password" />
                        </div>
                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                                <i class="zmdi zmdi-eye" aria-hidden="true"></i>
                            </a>
                            <input class="input100 border-start-0 ms-0 form-control @error('password_confirmation') is-invalid @enderror" name="password_confirmation" type="password" placeholder="{{__('Confirm Password')}}">
                            <x-error error-value="password_confirmation" />
                        </div>
                        <div class="container-login100-form-btn">
                            <button type="submit" class="login100-form-btn btn-primary">
                                {{ __('auth.register') }}
                            </button>
                        </div>
                        <div class="text-center pt-3">
                            <p class="text-dark mb-0">{{ __('Already have account?') }}<a href="{{route('login')}}" class="text-primary ms-1">{{ __('Sign In') }}</a></p>
                        </div>
{{--                        <label class="login-social-icon"><span>Register with Social</span></label>--}}
{{--                        <div class="d-flex justify-content-center">--}}
{{--                            <a href="javascript:void(0)">--}}
{{--                                <div class="social-login me-4 text-center">--}}
{{--                                    <i class="fa fa-google"></i>--}}
{{--                                </div>--}}
{{--                            </a>--}}
{{--                            <a href="javascript:void(0)">--}}
{{--                                <div class="social-login me-4 text-center">--}}
{{--                                    <i class="fa fa-facebook"></i>--}}
{{--                                </div>--}}
{{--                            </a>--}}
{{--                            <a href="javascript:void(0)">--}}
{{--                                <div class="social-login text-center">--}}
{{--                                    <i class="fa fa-twitter"></i>--}}
{{--                                </div>--}}
{{--                            </a>--}}
{{--                        </div>--}}
                    </form>
                </div>
            </div>
@endsection
