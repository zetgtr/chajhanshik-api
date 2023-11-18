<div class="sticky">
    <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
    <div class="app-sidebar">
        <div class="side-header">
            <a class="header-brand1 d-flex align-items-center justify-content-center" href="{{ route('admin.index') }}">
{{--                <img src="{{ asset('assets/images/brand/logo.png') }}" class="header-brand-img desktop-logo" alt="logo">--}}
{{--                <img src="{{ asset('assets/images/brand/logo-1.png') }}" class="header-brand-img toggle-logo"--}}
{{--                     alt="logo">--}}
                <div class="w-50" >
                    <img src="{{ asset('assets/images/logo/icon_cms_touch.svg') }}" class="header-brand-img light-logo" alt="logo">
                    <img src="{{ asset('assets/images/logo/logo_cms_touch.svg') }}" class="header-brand-img light-logo1" alt="logo">
                </div>
            </a>
            <!-- LOGO -->
        </div>
        <div class="main-sidemenu">
            <div class="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg"
                                                                  fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                </svg></div>
            <ul class="side-menu">
                @foreach($menuList as $item)
{{--                    @dd($item)--}}
                    <li class="sub-category">
                        <h3>{{ $item->name }}</h3>
                    </li>
                    @if($item->parent)
                        <x-admin.menu.menu_item :item="$item->parent" :parent="false" />
                    @endif
                @endforeach
            </ul>
            <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                                           width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                </svg></div>
        </div>
    </div>
    <!--/APP-SIDEBAR-->
</div>
