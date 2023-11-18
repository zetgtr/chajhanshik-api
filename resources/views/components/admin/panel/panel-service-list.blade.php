<div class="tab-pane fade w-100" id="service">
    <div class="table-responsive w-100">
        <table id="example3" class="table table-bordered text-nowrap border-bottom">
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
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>

{{--<script src="{{ asset('assets/js/admin/delete.js')}}"></script>--}}
{{--<script src="{{ asset('assets/js/table-data.js')}}"></script>--}}
