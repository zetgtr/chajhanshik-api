<form action="{{ route('admin.navigation.update',['navigation'=>$navigation]) }}" method="POST">
    @csrf
    @method('PUT')
    <x-warning />
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                <label>Название</label>
                <input name="title" id="title" class="form-control @error("title") is-invalid @enderror" value="{{ old('title') ? old('title') : $navigation->title }}">
                <x-error errorValue="title" />
            </div>
            <div class="form-group">
                <label>Адрес ссылки</label>
                <input name="url" id="url" class="form-control @error("url") is-invalid @enderror" value="{{ old('url') ? old('url') : $navigation->url }}">
                <x-error errorValue="url" />
            </div>
        </div>
        <div class="col-lg-6">
            <div class="form-group">
                <label>Страница</label>

                <select name="page" id="page" class="form-select @error("comment") is-invalid @enderror">
                    <option value="0">--Выберите--</option>
                    @foreach($pages as $page)
                        <option @selected($page->id == $navigation->page || old('page') == $page->id) value="{{ $page->id }}">{{ $page->title }}</option>
                    @endforeach
                </select>
                <x-error errorValue="comment" />
            </div>
            <div class="form-group">
                <label>Комментарий</label>
                <input name="comment" class="form-control @error("comment") is-invalid @enderror" value="{{ old('comment') ? old('comment') : $navigation->comment }}">
                <x-error errorValue="comment" />
            </div>
        </div>
    </div>
    <input type="submit" value="Сохранить" class="btn btn-success mt-2">
</form>

<script src="{{ asset('assets/js/admin/navigation/page.js') }}"></script>
