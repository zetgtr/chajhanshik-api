@extends('layouts.admin')
@section('title', 'Фотогалерея')
@section('content')
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
    />
    <div class="card">
        <div class="card-header card-header-divider">
            <div>
                <h3 class="card-title">Альбомы</h3>
            </div>
        </div>
        <div class="card-body">
            <x-warning />
            <div class="row">
                <div class="col-lg-8">
                    <x-admin.photogallery.category />
                </div>
                <div class="col-lg-4">
                    <h5 class="mb-4 category_form_title"><i class="fas fa-plus-circle"></i> Добавить альбом</h5>
                    <form action="{{ route('admin.photo_gallery.store') }}" id="photo_gallery_form" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div id="method"></div>
                        <input type="hidden" name="id" id="id_edit" value="">
                        <div class="form-group">
                            <label for="title">Заголовок альбома</label>
                            <input class="form-control " id="title" value="" name="title" type="text">
                        </div>
                        <div class="form-group">
                            <label for="description">Описание альбома</label>
                            <textarea class="form-control " id="description" name="description" type="text"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="image_url">Фото альбома</label>
                            <div class="input-group">
                                <input id="thumbnail" class="form-control upload_image" data-preview="files-unstyled" type="file" name="image" value="">
                            </div>
                        </div>
                        <div class="pb-0 mt-3">
                            <div class="files-unstyled">
                            </div>
                        </div>
                        <button type="submit" name="save" class="btn btn-sm btn-success">Сохранить</button>
                        <button type="submit" name="save" class="btn btn-sm btn-danger edit_close d-none">Отмена</button>
                    </form>

                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('assets/plugins/gallery/lightgallery.js') }}"></script>
    <script src="{{ asset('assets/plugins/gallery/lightgallery-1.js') }}"></script>
    <script src="{{ asset('assets/js/admin/utils/files.js') }}"></script>
    <script >
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
        filesClass.galleryAdmin()
    </script>
@endsection
