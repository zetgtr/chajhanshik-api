<form action="{{ route('admin.packages_settings.update', ['packages_setting' => 1]) }}" method="post" class="row">
    @csrf
    @method('PUT')
    <x-warning />
    <div class="col-lg-6">
        <div class="form-group">
            <label for="user">Пользователь</label>
            <input type="text" name="user" class="form-control @error('user') is-invalid @enderror" value="{{ $settings->user }}">
            <x-error errorValue="user" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="url">Url</label>
            <input type="text" name="url" class="form-control @error('url') is-invalid @enderror" value="{{ $settings->url }}">
            <x-error errorValue="url" />
        </div>
    </div>
    <div class="col-lg-12">
        <div class="form-group col-md-6 d-flex align-items-center">
            <label class="custom-switch ps-0">
                <input type="checkbox" name="docker" class="custom-switch-input docker_input" @checked(!$settings->docker)>
                <span class="custom-switch-indicator me-3"></span>
                <span class="custom-switch-description mg-l-10">Использовать путь к файлам</span>
            </label>
        </div>
    </div>
    <div class="col-lg-6 path @if($settings->docker) d-none @endif">
        <div class="form-group">
            <label for="php">Путь к исполняемому файлу PHP</label>
            <input type="text" name="php" class="form-control @error('php') is-invalid @enderror" value="{{ $settings->php }}">
            <x-error errorValue="php" />
        </div>
    </div>
    <div class="col-lg-6 path @if($settings->docker) d-none @endif">
        <div class="form-group">
            <label for="composer">Путь к исполняемому файлу composer</label>
            <input type="text" name="composer" class="form-control @error('composer') is-invalid @enderror" value="{{ $settings->composer }}">
            <x-error errorValue="composer" />
        </div>
    </div>
    <div>
        <input type="submit" class="btn btn-xs btn-success" value="Сохранить">
    </div>
</form>

<script>
    $('.docker_input').on('change',()=>{
        if($('.docker_input:checked').val())
        {
            $(".path").removeClass('d-none');
        }else {
            $(".path").addClass('d-none');
        }
    })
</script>
