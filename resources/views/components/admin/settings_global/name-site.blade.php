<div class="form-group">
    <label for="sitename">Название сайта:</label>
    <input type="text" name="site_name" value="{{ old('site_name') ? old('site_name') : $settings->site_name }}" maxlength="255" class="form-control @error('site_name') is-invalid @enderror">
    <x-error error-value="site_name" />
</div>

<div class="row">
    <div class="col-xl-6">
        <div class="form-group">
            <label for="username">Ваше имя:</label>
            <input type="text" name="user_name" value="{{ old('user_name') ? old('user_name') : $settings->user_name }}" maxlength="32" class="form-control @error('user_name') is-invalid @enderror">
            <x-error error-value="useimager_name" />
        </div>
    </div>
    <div class="col-xl-6">
        <div class="form-group">
            <label for="siteemail">E-mail администратора:</label>
            <input type="text" name="site_email" value="{{ old('site_email') ? old('site_email') : $settings->site_email }}" maxlength="128" class="form-control @error('site_email') is-invalid @enderror">
            <x-error error-value="site_email" />
        </div>
    </div>
</div>
<div class="row">
    <div class="col-xl-8">
        <div class="form-group">
            <label for="sitebanner">Лого сайта:</label>
            <div class="input-group">
                <input id="thumbnail" class="form-control" type="file" name="image" value="{{ old("image") ? old("image") : $settings->site_banner }}">
                <x-error error-value="image" />
            </div>
            <x-error error-value="site_banner" />
        </div>
    </div>
    <div class="col-xl-4">
        <div class="form-group">
            <label for="siteemail">Счетчик:</label>
            <input type="text" name="counter_id" value="{{ old('counter_id') ? old('counter_id') : $metrika->counter_id }}" maxlength="128" class="form-control @error('counter_id') is-invalid @enderror">
            <x-error error-value="site_email" />
        </div>
    </div>

    <div class="col-lg-12">
        <div class="pb-0 mt-3">
            <ul id="lightgallery" class="list-unstyled row">
                @if(old("site_banner"))
                    <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                        data-responsive="{{old("image")}}"
                        data-src="{{old("image")}}">
                        <a href="javascript:void(0)">
                            <img class="img-responsive br-5" src="{{old("image")}}" alt="Thumb-1">
                        </a>
                    </li>
                @elseif($settings->site_banner)
                    <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
                        data-responsive="{{$settings->site_banner}}"
                        data-src="{{$settings->site_banner}}">
                        <a href="javascript:void(0)">
                            <img class="img-responsive br-5" src="{{$settings->site_banner}}" alt="Thumb-1">
                        </a>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</div>


<template id="template-gallery">
    <li class="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0">
        <a href="javascript:void(0)">
            <img class="img-responsive br-5" alt="Thumb-1">
        </a>
    </li>
</template>

<script src="{{ asset('assets/plugins/gallery/lightgallery.js') }}"></script>
<script src="{{ asset('assets/plugins/gallery/lightgallery-1.js') }}"></script>
