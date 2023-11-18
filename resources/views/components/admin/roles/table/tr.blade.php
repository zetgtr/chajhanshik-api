
<tr>
    <td class="text-nowrap align-middle">{{ $role->name }}</td>

    <td class="text-center align-middle">
        <div class="btn-group align-top">
            <a href="{{ route('admin.roles.edit', ['role'=>$role]) }}" data-id="{{ $role->id }}" data-name="{{ $role->name }}" class="btn btn-sm edit-role modal-effect btn-primary badge" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8" type="button">Редактировать</a>
            <a href="{{ route('admin.roles.destroy',['role'=>$role]) }}" class="btn btn-sm btn-primary delete badge" type="button"><i class="fa fa-trash"></i></a>
        </div>
    </td>
</tr>






<script src="{{asset('assets/js/admin/delete.js')}}" ></script>


