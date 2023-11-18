<link href="{{ asset('assets/css/admin/loader.css') }}" rel="stylesheet">
<div class="row">
    <x-warning />
    <form action="{{ route('admin.packages.destroy', ['package' => 1]) }}" method="post" id="form-remove" class="col-lg-7">
        @csrf
        @method('DELETE')
        <label for="packages" class="form-label">Установленные плагины</label>
        <select name="packages" multiple class="form-control" id="packages" >
            @foreach($packages as $key=>$package)
                @foreach($packagesInstall as $install)
                    @if($install->id_package == $key)
                        <option id="package-{{$key}}" value="{{$key}}">{{$package['name']}}</option>
                    @endif
                @endforeach
            @endforeach
        </select>
        <div type="button" class="btn btn-danger mt-3 modal-effect delete-packages" data-url="/admin/packages/" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Удалить</div>
    </form>
    <div class="col-lg-5">
        <form action="{{ route('admin.packages.set') }}" id="form-install" method="post">
            @csrf
            @method('PUT')
            <div class="form-group">
                <label for="packages_install" class="form-label">Установить плагин</label>
                <select name="packages_install" id="packages_install" class="form-select">
                    <option value="0">-- Выберете --</option>
                    @foreach($packages as $key=>$package)
                        <option data-url="{{ route('admin.packages.show',['package'=>$key]) }}" data-edit="{{ route('admin.packages.edit',['package'=>$key]) }}" value="{{$key}}">{{$package['name']}}</option>
                    @endforeach
                </select>
            </div>
            <div type="button" class="btn btn-success modal-effect install-packages" data-url="/admin/packages/" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Установить</div>
            <div type="button" class="btn btn-info add-packages modal-effect" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Добавить</div>
            <div type="button" class="btn btn-default edit-packages modal-effect" data-url="/admin/packages/" data-bs-effect="effect-fall" data-bs-toggle="modal" data-bs-target="#modaldemo8">Редактировать</div>
        </form>
    </div>
</div>
<template id="success-template">
    <div class="container-packages">
        <svg  style="enable-background:new 0 0 256 256; width: 100px;" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
                .st0{fill:#00A388;}
                .st1{fill:#EA685E;stroke:#00886F;stroke-width:15;stroke-miterlimit:10;}
                .st2{fill:#E8E8E8;}
                .st3{fill:#FFFFFF;stroke:#00886F;stroke-width:15;stroke-miterlimit:10;}
                .st4{fill:#00886F;}
                .st5{fill:#FFFFFF;}
                .st6{fill:#CCCCCC;}
                .st7{fill:none;stroke:#00A388;stroke-width:4;stroke-miterlimit:10;}
                .st8{fill:#EA685E;}
                .st9{fill:#FFAB80;}
                .st10{fill:#2C3E50;}
                .st11{fill:#4B687F;}
                .st12{fill:none;stroke:#3E5063;stroke-width:4;stroke-miterlimit:10;}
                .st13{fill:#FFD766;}
                .st14{fill:#FFE6D3;}
                .st15{fill:#F09A79;}
                .st16{fill:#C91E01;}
                .st17{fill:#EA3B28;}
                .st18{fill:#0F627F;}
                .st19{fill:#005670;}
                .st20{filter:url(#Adobe_OpacityMaskFilter);}
                .st21{mask:url(#SVGID_2_);}
                .st22{fill:#8C623B;}
                .st23{fill:#E6E6E6;stroke:#005670;stroke-width:16;stroke-miterlimit:10;}
                .st24{opacity:0.6;}
                .st25{fill:#E6E6E6;}
                .st26{fill:#FFEC82;}
                .st27{fill:#FFCF3A;}
                .st28{filter:url(#Adobe_OpacityMaskFilter_1_);}
                .st29{mask:url(#SVGID_1_);}
                .st30{fill:#603813;}
                .st31{fill:#F2F2F2;}
                .st32{fill:#666666;}
            </style><g id="Layer_2"><circle class="st2" cx="128" cy="128" r="120"/></g><g id="Layer_1"><g><g><circle class="st4" cx="128" cy="132" r="72.5"/></g><g><circle class="st0" cx="128" cy="124" r="72.5"/></g><g><g><rect class="st4" height="21.06296" transform="matrix(0.707107 0.707107 -0.707107 0.707107 132.207352 -30.74865)" width="52.895294" x="76.772934" y="133.682587"/></g><g><rect class="st4" height="21.06296" transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 340.047546 126.467987)" width="93.42083" x="97.120979" y="123.12867"/></g></g><g><g><rect class="st5" height="21.06296" transform="matrix(0.707107 0.707107 -0.707107 0.707107 127.964714 -32.506008)" width="52.895294" x="76.772934" y="127.682587"/></g><g><rect class="st5" height="21.06296" transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 335.804901 116.225349)" width="93.42083" x="97.120979" y="117.12867"/></g></g></g></g></svg>
    </div>
</template>
<template id="error-template">
    <div class="container-packages">
        <svg style="enable-background:new 0 0 256 256; width: 100px;" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
                .st0{fill:#00A388;}
                .st1{fill:#EA685E;stroke:#00886F;stroke-width:15;stroke-miterlimit:10;}
                .st2{fill:#E8E8E8;}
                .st3{fill:#FFFFFF;stroke:#00886F;stroke-width:15;stroke-miterlimit:10;}
                .st4{fill:#00886F;}
                .st5{fill:#FFFFFF;}
                .st6{fill:#CCCCCC;}
                .st7{fill:none;stroke:#00A388;stroke-width:4;stroke-miterlimit:10;}
                .st8{fill:#EA685E;}
                .st9{fill:#FFAB80;}
                .st10{fill:#2C3E50;}
                .st11{fill:#4B687F;}
                .st12{fill:none;stroke:#3E5063;stroke-width:4;stroke-miterlimit:10;}
                .st13{fill:#FFD766;}
                .st14{fill:#FFE6D3;}
                .st15{fill:#F09A79;}
                .st16{fill:#C91E01;}
                .st17{fill:#EA3B28;}
                .st18{fill:#0F627F;}
                .st19{fill:#005670;}
                .st20{filter:url(#Adobe_OpacityMaskFilter);}
                .st21{mask:url(#SVGID_2_);}
                .st22{fill:#8C623B;}
                .st23{fill:#E6E6E6;stroke:#005670;stroke-width:16;stroke-miterlimit:10;}
                .st24{opacity:0.6;}
                .st25{fill:#E6E6E6;}
                .st26{fill:#FFEC82;}
                .st27{fill:#FFCF3A;}
                .st28{filter:url(#Adobe_OpacityMaskFilter_1_);}
                .st29{mask:url(#SVGID_1_);}
                .st30{fill:#603813;}
                .st31{fill:#F2F2F2;}
                .st32{fill:#666666;}
            </style><g id="Layer_2"><circle class="st2" cx="128" cy="128" r="120"/></g><g id="Layer_1"><g><g><g><circle class="st16" cx="128" cy="132" r="72.5"/></g><g><circle class="st17" cx="128" cy="124" r="72.5"/></g></g><g><g><g><rect class="st16" height="21.06296" transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 312.554871 136.535538)" width="93.42083" x="81.289589" y="122.468521"/></g></g><g><g><rect class="st16" height="21.06296" transform="matrix(0.707107 0.707107 -0.707107 0.707107 131.535538 -51.554871)" width="93.42083" x="81.289589" y="122.468521"/></g></g></g><g><g><g><rect class="st5" height="21.06296" transform="matrix(-0.707107 0.707107 -0.707107 -0.707107 309.019348 128)" width="93.42083" x="81.289589" y="117.468521"/></g></g><g><g><rect class="st5" height="21.06296" transform="matrix(0.707107 0.707107 -0.707107 0.707107 128 -53.019337)" width="93.42083" x="81.289589" y="117.468521"/></g></g></g></g></g></svg>
    </div>
</template>
<script src="{{ asset('assets/js/admin/packages/add-edit.js') }}"></script>
<x-admin.modal title="" />
<x-admin.packages.add-pacages />
