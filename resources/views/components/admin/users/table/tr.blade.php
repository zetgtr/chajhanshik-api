
<tr>
    <td class="align-middle text-center">
        <div class="text-center">
            {{ $user->role->name }}
        </div>
    </td>
    <td class="align-middle text-center"><img alt="image" class="avatar avatar-md br-7" src="{{ $user->avatar }}"></td>
    <td class="text-nowrap align-middle">{{ $user->name }}</td>
    <td class="text-nowrap align-middle"><span>{{ $user->created_at }}</span></td>

    <td class="text-center align-middle">
        <div class="btn-group align-top">
            <a href="{{ route('admin.user.edit', ['user'=>$user->id]) }}" class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-bs-toggle="" type="button">Редактировать</a>
            <a href="{{ route('admin.user.destroy',['user'=>$user]) }}" class="btn btn-sm btn-primary delete badge" type="button"><i class="fa fa-trash"></i></a>
        </div>
    </td>
</tr>
