<x-warning />
<div class="row">
    <ul class="list-group col-lg-6">
        @forelse($navigations as $navigation)
                <li class="list-group-item delete-element" data-id="2" data-name="Файлы" data-position="left">
                    <div class="">
                        <span>{{ $navigation->title }}</span>
                    </div>
                    <div class="dnd-edit" style="top: 0">
                        <a href="{{ route('admin.navigation_list.destroy',['navigation_list'=>$navigation]) }}"  style="color: #fff" class="button-delete delete btn btn-danger btn-xs pull-right" data-owner-id="1">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                        <a href="{{ route('admin.navigation_list.edit',['navigation_list'=>$navigation]) }}" style="color: #fff" class="button-edit btn btn-success btn-xs pull-right" data-owner-id="1">
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </a>
                    </div>
                </li>


        @empty
            Не создано
        @endforelse
    </ul>
    <div class="col-lg-6 d-flex justify-content-end">
        <div>
            <a href="{{ route('admin.navigation_list.create') }}" class="btn btn-primary">Создать</a>

        </div>
    </div>
</div>

<script src="{{asset('assets/js/admin/delete.js')}}" ></script>
