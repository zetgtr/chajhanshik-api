<div class="tab-pane fade active show" id="site">
    <div class="table-responsive">
        <table id="example2" class="table table-bordered text-nowrap border-bottom">
            <thead>
            <tr>
                <th class="border-bottom-0 text-center">Название панели</th>
                <th class="border-bottom-0 text-center">Alias</th>
                <th class="border-bottom-0 text-center">Описание</th>
                <th class="border-bottom-0 text-center">Действие</th>
            </tr>
            </thead>
            <tbody>
            @foreach($panels as $panel)
                <tr class="delete-element">
                    <td>{{ $panel->title }}</td>
                    <td class="text-center">{{ $panel->alias }}</td>
                    <td class="text-center">{{ $panel->description }}</td>
                    <td class="text-center btn-list-table">
                        <a href="{{ route('admin.panel.edit', ['panel'=>$panel]) }}" class="btn btn-secondary">
                            <i class="fal fa-pencil-alt"></i>
                        </a>
                        <a href="{{ route('admin.panel.destroy', ['panel'=>$panel]) }}" class="btn btn-danger delete">
                            <i class="far fa-trash-alt"></i>
                        </a>
                        @if($panel->publish)
                            <a href="{{ route('admin.panel.publish', ['panel'=>$panel]) }}" class="btn btn-success show-publish">
                                <i class="far fa-eye"></i>
                            </a>
                        @else
                            <a href="{{ route('admin.panel.publish', ['panel'=>$panel]) }}" class="btn btn-default show-publish">
                                <i class="far fa-eye-slash"></i>
                            </a>
                        @endif
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>

<script src="{{ asset('assets/js/admin/show.js') }}"></script>
<script src="{{ asset('assets/js/admin/delete.js')}}"></script>
<script src="{{ asset('assets/js/table-data.js')}}"></script>

