<template id="add-role">
    <div>
        <form action="{{ route('admin.roles.store') }}" method="post" class="row">
            @csrf
            <div class="col-lg-12">
                <div class="form-group">
                    <label for="roles_name">{{__("Roles")}}</label>
                    <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" value="{{old('name')}}">
                </div>
            </div>
            <button class="btn btn-primary mt-3">{{__("Save")}}</button>
        </form>
    </div>
</template>
