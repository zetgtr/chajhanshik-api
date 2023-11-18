

<div class="card-body col-lg-4">
    <x-warning />
    <div class="text-center chat-image mb-5">
        <div class="avatar avatar-xxl chat-profile mb-3 brround">
            <img alt="avatar" src="{{asset('assets/images/users/13.jpg')}}" class="brround">
        </div>
        <div class="">
            <h5 class="mb-1 text-dark fw-semibold"></h5>
        </div>
    </div>
    <div class="form-group">
        <label for="">Аватар</label>
        <div class="input-group">
            <input id="thumbnail" class="form-control" type="file" name="avatar_file" value="{{ old("avatar")}}">
            <x-error error-value="images" />
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">Новый пароль</label>
        <div class="wrap-input100 validate-input input-group" id="Password-toggle1">
            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
            </a>
            <input class="input100 form-control" name="password" type="password" placeholder="Новый пароль" autocomplete="new-password">
        </div>
    </div>
    <div class="form-group">
        <label class="form-label">Повторите пароль</label>
        <div class="wrap-input100 validate-input input-group" id="Password-toggle2">
            <a href="javascript:void(0)" class="input-group-text bg-white text-muted">
                <i class="zmdi zmdi-eye text-muted" aria-hidden="true"></i>
            </a>
            <input class="input100 form-control" name="password_confirmation" type="password" placeholder="Повторите пароль" autocomplete="new-password">
        </div>
    </div>
</div>



<script src="{{ asset('assets/js/show-password.min.js') }}"></script>
