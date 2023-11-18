<div class="row">
    <div class="col-lg-6">
        <div class="form-group">
            <label for="developer">Разработчик</label>
            <input class="form-control @error('developer') is-invalid @enderror" id="developer" value="{{ old('developer',!empty($settings) ? $settings->developer : "") }}" name="developer" type="text">
            <x-error error-value="developer" />
        </div>
        <div class="form-group">
            <label for="developer_site">Сайт</label>
            <input class="form-control @error('developer_site') is-invalid @enderror" id="developer_site" value="{{ old('developer_site',!empty($settings) ? $settings->developer_site : "") }}" name="developer_site" type="text">
            <x-error error-value="developer_site" />
        </div>
        <div class="form-group">
            <label for="developer_phone">Телефон</label>
            <input class="form-control @error('developer_phone') is-invalid @enderror" id="developer_phone" value="{{ old('developer_phone',!empty($settings) ? $settings->developer_phone : "") }}" name="developer_phone" type="text">
            <x-error error-value="developer_phone" />
        </div>
        <div class="form-group">
            <label for="developer_email">Email</label>
            <input class="form-control @error('developer_email') is-invalid @enderror" id="developer_email" value="{{ old('developer_email',!empty($settings) ? $settings->developer_email : "") }}" name="developer_email" type="text">
            <x-error error-value="developer_email" />
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="url">Адрес сайта</label>
            <input class="form-control @error('url') is-invalid @enderror" id="passed" value="{{ old('url',!empty($settings) ? $settings->url : "")  }}" name="url" type="text">
            <x-error error-value="url" />
        </div>
        <div class="form-group">
            <label for="passed">Сайт сдан</label>
            <input class="form-control @error('passed') is-invalid @enderror" id="passed" value="{{ old('passed',!empty($settings) ? $settings->passed : "") }}" name="passed" type="date">
            <x-error error-value="passed" />
        </div>
        <div class="form-group">
            <label for="key">API токен метрики</label>
            <input class="form-control @error('token') is-invalid @enderror" id="key" value="{{ old('key',!empty($key) ? $key : "") }}" name="key" type="text">
            <x-error error-value="key" />
        </div>
    </div>
</div>
