<div class="form-group mg-b-6 col-lg-6">
    <label for="">Права доступа</label>
    <select name="role_id" id="role_id" class="form-select">
        @foreach($roles as $role)
            <option @selected(!empty($user) && $role->id === $user->role_id) value="{{ $role->id }}">{{ $role->name }}</option>
        @endforeach
    </select>
</div>

