<form class="validate-form" method="POST" action="{{ route('login') }}">
    @csrf
    <div class="d-flex justify-content-center">
        <img src="{{ $logo }}" style="width: 100px">
    </div>
    <span class="form-title">
        {{ __('auth.login') }}
    </span>
    <x-warning />
    <div class="panel panel-primary">
        <div class="panel-body">
            <div class="tab-content">
                <div class="tab-panel">
                    <div class="input-group mb-2">
                        <div class="input-group-text bg-white text-muted">
                            <i class="fad fa-user"></i>
                        </div>
                        <input class="form-control input_panel  @error('name') is-invalid @enderror" type="text"
                            name="name" value="{{ old('email') }}" placeholder="Логин">
                        <x-error error-value="name" />
                    </div>
                    <div class="validate-input input-group password-eye">
                        <div class="input-group-text bg-white  text-muted">
                            <i class="fad fa-eye"></i>
                            <i class="fad fa-eye-slash d-none"></i>
                        </div>
                        <input class="form-control input_panel @error('password') is-invalid @enderror" name="password"
                            type="password" placeholder="{{ __('Password') }}">
                        <x-error error-value="password" />
                    </div>
                    <div class="mt-3">
                        <label for="remember" class="remember">
                            <input type="checkbox" name="remember" id="remember">
                            Запомнить пароль
                        </label>
                    </div>
                    <div class="container-form-btn pt-4">
                        <button type="submit" class="login100-form-btn btn-primary">
                            {{ __('auth.login') }}
                        </button>
                    </div>
                    <div class="text-end pt-3">
                        <p class="mb-0"><a href="{{ route('password.email') }}"
                                class="text-primary ms-1">{{ __('Forgot Your Password?') }}</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>

@vite('resources/js/auth/auth.js')
