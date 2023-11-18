<form action="{{ route('admin.header-and-footer.update',['header_and_footer'=>$data]) }}" method="POST" class="card-body">
    @method('PUT')
    @csrf
    <x-warning />
    <div class="form-group mb-3">
        <label for="content" class="form-label" >Шапка</label>
        <textarea name="header" style="height: 300px;" class="form-control @error('header') is-invalid @enderror">{{ old('header') ? old('header') : $data->header }}</textarea>
        <x-error error-value="header" />
    </div>
    <div class="form-group mb-3">
        <label for="content" class="form-label" >Подвал</label>
        <textarea name="footer" style="height: 300px;" class="form-control @error('footer') is-invalid @enderror">{{ old('footer') ? old('footer') : $data->footer }}</textarea>
        <x-error error-value="footer" />
    </div>
    <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
</form>
