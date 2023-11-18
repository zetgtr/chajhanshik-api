<section id="SortAnimation" class="SortAnimation">
    <article class="container_gallery_image BlockLayout BlockLayout--typeFlex" tabindex="0">

        @foreach($images as $key=>$image)
            <span class="Block Block--item{{$key+1}} Block--isDraggable" title="Click to drag" tabindex="0" style="">
            <div class="BlockContent">

                <div class="box_gallery_image" tabindex="0">
                <div class="file-image p-2 " id="{{$image->id}}">
                    <a href="{{ $image->image_url }}" data-fancybox="gallery" class="gallery_box" >
                        <img src="{{$image->image_url}}" alt="" class="w-100">
                    </a>
                    <ul class="icons">
                        <li>
                            <a href="javascript:void(0)" class="btn bg-primary ">
                                <i class="fal fa-arrows-alt"></i>
                            </a>
                        </li>
                        <li data-id="{{$image->id}}" data-type="image">
                            <a href="javascript:void(0)" class="btn bg-secondary edit_image">
                                <i class="fal fa-pen"></i>
                            </a>
                        </li>
                        <li>
                            <form method="POST" action="{{ route('admin.photo_gallery.image_delete',['image'=>$image->id]) }}">
                                @method('DELETE')
                                @csrf
                                <a href="javascript:void(0)" class="btn bg-danger delete_image">
                                    <i class="fe fe-trash"></i>
                                </a>
                            </form>
                        </li>
                    </ul>
                    @if($image->title)
                        <div class="container_title_gallery">
                            <a href="{{ route('admin.photo_gallery.show',['photo_gallery'=>$image->id]) }}">
                                <span class="file-name_gallery">{{$image->title}}</span>
                            </a>
                        </div>
                    @endif
                </div>
            </div>
            </div>
        </span>
        @endforeach
    </article>
</section>
@if(count($images) == 0)

    <div class="col-lg-12 text-center">Нет фото</div>
@endif
<script src="{{ asset('assets/js/admin/gallery/gallery.js') }}"></script>
@vite('resources/js/utils/dnd.js')

