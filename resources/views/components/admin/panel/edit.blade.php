<link id="style" href="{{ asset('assets/css/admin/panel.css') }}" rel="stylesheet" />

<div class="row">
    <div class="col-lg-6">
        <div class="form-group">
            <label class="ml-3">Имя панели:</label>
            <input type="text" id="title" name="title" class="form-control" value="{{ $panel->title }}"
                placeholder="Введите имя панели">
        </div>
        <div class="form-group">
            <label class="ml-3">Alias:</label>
            <input name="alias" id="alias" class="form-control" oninput=" $('#alias').css('box-shadow', 'none');"
                type="text" value="{{ $panel->alias }}" placeholder="Введите alias">
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label class="ml-3">Описание:</label>
            <textarea name="description" id="discription" class="form-control" rows="4" placeholder="Введите описание">{{ $panel->description }}</textarea>
        </div>
    </div>
    <div class="card-header header-panel">Данные панели</div>

    <div class="panel_table"></div>
    <div class="tina" style="display: none;">
        <textarea name="description" id="my-editor" class="moxiemanager my-editor"></textarea>
        <div onclick="save_texarea()" class="btn btn-outline-primary btn-sm my-3">Назад</div>
    </div>
    <div class="col-12 mt-3">
        <button type="button" onclick="send_all(true);" class="btn btn-sm btn btn-outline-primary">Сохранить и
            выйти</button>
        <button style="width: 100px; margin-left: 50px;" type="button" onclick="send_all(false);"
            class="btn btn-sm btn-outline-success">Сохранить</button>
        <a style="width: 80px;" href="{{ route('admin.panel.index') }}"
            class="btn btn-sm btn-outline-danger redir">Отмена</a>
        <div class="detachedVue">
            <input type="checkbox" name="update" id="update">
            <label class="btn btn-sm btn btn-outline-danger" for="update" value="1">Обновить vue</label>
        </div>
        <div class="detached">
            <input type="checkbox" name="detached" id="detached">
            <label class="btn btn-sm btn btn-outline-info" for="detached" value="1">Сервисная панель</label>
        </div>
    </div>
</div>
<input type="hidden" id="exit" value="{{ route('admin.panel.index') }}">
<input type="hidden" id="form_url" value="{{ route('admin.panel.update', ['panel' => $panel->id]) }}">
<input type="hidden" id="select_table" value="{{ route('admin.panel-select') }}">
<input type="hidden" name="_method" id="method" value="PUT">
@vite('resources/sass/admin/panel.scss')
<script>
    $ar = `{!! addslashes($panel->data) !!}`;
    id = {{ $panel->id }};
</script>
<script src="{{ asset('assets/js/admin/lfm.js') }}"></script>
<script type='text/javascript' src='{{ asset('assets/js/admin/panel/panel_editor.js') }}'></script>
