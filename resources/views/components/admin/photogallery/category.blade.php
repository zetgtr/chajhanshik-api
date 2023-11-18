<section id="SortAnimation" class="SortAnimation">
    <article class="container_gallery_image BlockLayout BlockLayout--typeFlex" tabindex="0">
        @foreach($categories as $key=>$category)
        <span class="Block Block--item{{$key+1}} Block--isDraggable" title="Click to drag" tabindex="0" style="">
            <div class="BlockContent">
                <div class="box_gallery_image" tabindex="0">
                <div class="file-image p-2 " id="{{$category->id}}">
                    <a href="{{ route('admin.photo_gallery.show',['photo_gallery'=>$category->id]) }}" class="" >
                        <img src="{{$category->image_url}}" alt="" class="w-100">
                    </a>
                    <ul class="icons">
                        <li>
                            <a href="javascript:void(0)" class="btn bg-primary ">
                                <i class="fal fa-arrows-alt"></i>
                            </a>
                        </li>
                        <li data-id="{{$category->id}}" data-type="category">
                            <a href="javascript:void(0)" class="btn bg-secondary edit_image">
                                <i class="fal fa-pen"></i>
                            </a>
                        </li>
                        <li>
                            <form method="POST" action="{{ route('admin.photo_gallery.destroy',['photo_gallery'=>$category->id]) }}">
                                @method('DELETE')
                                @csrf
                                <a href="javascript:void(0)" class="btn bg-danger delete_image">
                                    <i class="fe fe-trash"></i>
                                </a>
                            </form>
                        </li>
                    </ul>
                    <div class="container_title_gallery">
                        <a href="{{ route('admin.photo_gallery.show',['photo_gallery'=>$category->id]) }}">
                            <span class="file-name_gallery">{{$category->title}}</span>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </span>
      @endforeach
    </article>
</section>
@if(count($categories) == 0)

    <div class="col-lg-12 text-center">Нет альбомов</div>
@endif
<script src="{{ asset('assets/js/admin/gallery/gallery.js') }}"></script>
@vite('resources/js/utils/dnd.js')

