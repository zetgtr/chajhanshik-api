@foreach ($menus as $menu)
    <div class="p-3 fw-semibold ps-5">{{ $menu->name }}</div>

    <div class="card-body pt-2">
        <div class="browser-stats">
            @forelse($menu->parent as $parent)
                @php
                    $url = str_replace('/', '.', $parent->url);
                    $url .= $parent->controller_type ? '' : '.index';
                @endphp

                <div class="row mb-4 align-items-center">
                    <a class="menu__link" href="@if ($parent->url) {{ route('admin.' . $url) }} @endif">
                        <div class="col-sm-2 mb-sm-0 mb-3">
                            <span class="icon__container feeds avatar-circle brround bg-primary-transparent">
                                <i class="{{ $parent->logo }} text-primary"></i>
                            </span>
                        </div>
                        <div class="col-sm-10 ps-sm-0">
                            <div class="d-flex align-items-end justify-content-between ms-2">
                                <h6>{{ $parent->name }}</h6>
                            </div>
                        </div>
                    </a>
                </div>

            @empty
                <div class="danger">Пусто</div>
            @endforelse
        </div>
    </div>
@endforeach
