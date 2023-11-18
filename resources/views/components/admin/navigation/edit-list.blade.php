<form action="{{ route('admin.navigation_list.update', ['navigation_list'=>$navigation]) }}" method="POST">
    @csrf
    @method('PUT')
    <x-warning />
    <input type="hidden" value="{{ $navigation->id }}" name="id_nav">
    <div class="row">
        <div class="form-group col-lg-6">
            <label>Название</label>
            <input name="title" class="form-control @error("title") is-invalid @enderror" value="{{ old('title') ? old('title') : $navigation->title }}">
            <x-error errorValue="title" />
        </div>
        <div class="form-group col-lg-4">
            <label>Alias</label>
            <input name="alias" class="form-control @error("alias") is-invalid @enderror" value="{{ old('alias') ? old('alias') : $navigation->alias }}">
            <x-error errorValue="alias" />
        </div>
        <div class="form-group col-lg-2">
            <br>
            <input type="submit" value="Сохранить" class="btn btn-success mt-2">
        </div>
        <div class="col-lg-6">
            <div class="dd nestable" id="target">
                <x-admin.navigation.link :link="$linksEdit" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label>Поиск</label>
                <input name="search" class="form-control @error("search") is-invalid @enderror" value="{{ old('search') }}">
                <x-error errorValue="search" />
            </div>
            <div class="dd nestable" id="source">
                <x-admin.navigation.link :link="$link" />
            </div>
        </div>
    </div>
    <input type="hidden" name="id" value="2">
</form>

<script src="{{asset('assets/js/admin/panel/dnd.js')}}" ></script>
