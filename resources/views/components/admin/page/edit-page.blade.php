<form id="page" action="{{ route('admin.page-create.update', ['page_create'=>$page]) }}" method="POST" class="row">
    @csrf
    @method('PUT')
    <x-warning />
    <input type="hidden" name="links" id="links" value="{{ old('links',json_encode($page->arrayLinks())) }}">
    <div class="col-6">
        <div class="form-group">
            <label for="title">Название страницы (H1):</label>
            <input type="text" id="title" name="title" value="{{ old('title') ? old('title') : $page->title }}" class="form-control @error('title') is-invalid @enderror" autocomplete="off">
            <x-error error-value="title" />
        </div>
        <div class="form-group">
            <label for="url">URL (без html):</label>
            <input type="text" name="url" value="{{ old('url') ? old('url') : $page->url }}" class="form-control @error('url') is-invalid @enderror">
            <x-error error-value="url" />
        </div>
        <div class="form-group">
            <label for="access">Доступ: </label>
            <select name="access" class="form-control @error('access') is-invalid @enderror form-select">
                <option value="0" selected="selected">Общий</option>
                @foreach($roles as $role)
                    <option @selected(old('access') === $role->id || $page->access === $role->id ) value="{{ $role->id }}">{{ $role->name }}</option>
                @endforeach
            </select>
            <x-error error-value="access" />
        </div>
    </div>
    <div class="col-6">
        <div class="form-group">
            <label for="customTitle">Заголовок страницы (Title):</label>
            <input type="text" name="custom_title" value="{{ old('custom_title') ? old('custom_title') : $page->custom_title }}" class="form-control @error('custom_title') is-invalid @enderror">
            <x-error error-value="custom_title" />
        </div>
        <div class="form-group">
            <label for="customDescription">Описание страницы (Description):</label>
            <input type="text" name="description" value="{{ old('description') ? old('description') : $page->description }}" class="form-control @error('description') is-invalid @enderror">
            <x-error error-value="description" />
        </div>
        <div class="form-group">
            <label for="customKeywords">Ключевые слова (Keywords):</label>
            <input type="text" name="keywords" value="{{ old('keywords') ? old('keywords') : $page->keywords }}" class="form-control @error('keywords') is-invalid @enderror">
            <x-error error-value="keywords" />
        </div>
    </div>
    <div class="form-group">
        <label>Содержание страницы:</label>
        <x-admin.page.page-service :datahub="$datahub" />
    </div>
    <div class="col-lg-12">
        <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
    </div>
</form>
