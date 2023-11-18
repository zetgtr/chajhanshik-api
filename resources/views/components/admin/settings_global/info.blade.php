
    <div class="form-group">
        <label for="description">Описание сайта: <span class="small">(description)</span></label>
        <textarea name="description" cols="50" rows="3" class="form-control @error('description') is-invalid @enderror">{{ old('description') ? old('description') : $settings->description }}</textarea>
        <x-error error-value="description" />
    </div>
    <div class="form-group">
        <label for="keywords">Ключевые слова: <span class="small">(keywords)</span></label>
        <textarea name="keywords" cols="50" rows="3" class="form-control @error('keywords') is-invalid @enderror">{{ old('keywords') ? old('keywords') : $settings->keywords }}</textarea>
        <x-error error-value="keywords" />
    </div>
    <div class="form-group">
        <label for="intro">Подвал сайта: <span class="small">(footer)</span></label>
        <textarea name="footer" cols="50" rows="3" class="form-control @error('footer') is-invalid @enderror">{{ old('footer') ? old('footer') : $settings->footer }}</textarea>
        <x-error error-value="footer" />
    </div>

