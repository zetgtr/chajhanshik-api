
<div class="card-body col-lg-8 mt-5">
    <div class="row">
        <div class="form-group col-md-6">
            <label for="exampleInputLogin">Логин</label>
            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ old('name') ? old('name') : $user->name }}"  id="exampleInputLogin" placeholder="Логин">
            <x-error error-value="name" />
        </div>
        <div class="form-group col-md-6">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" value="{{ old('email') ? old('email') : $user->email }}"  id="exampleInputEmail1" placeholder="Email">
            <x-error error-value="email" />
        </div>

        <x-admin.users.profile.role :user="$user" />

        <div class="form-group col-md-6 d-flex align-items-center">
            <label class="custom-switch mt-5 ps-0">
                <input type="checkbox" name="is_admin" class="custom-switch-input" @if($user->is_admin || old('is_admin')) checked @endif>
                <span class="custom-switch-indicator me-3"></span>
                <span class="custom-switch-description mg-l-10">Доступ в админку</span>
            </label>
        </div>
    </div>
</div>
