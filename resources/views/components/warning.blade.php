@if ($errors->any())
    @foreach($errors->all() as $error)
        <x-alert type="danger" :message="$error"></x-alert>
    @endforeach
@endif
@if (session('error'))
    <x-alert type="danger" :message="session('error')"></x-alert>
@endif
@if (session('success'))
    <x-alert type="success" :message="session('success')"></x-alert>
@endif
