<link id="style" href="{{asset('assets/css/admin/menu-style.css')}}" rel="stylesheet" />
<div class=" tab-menu-heading">
    <div class="tabs-menu1">
        <ul class="nav panel-tabs">
            @foreach($links as $link)
                <li>
                    <a href="{{!empty($link['url']) ? url($link['url']) : route($link['route'])}}" class="{{!empty($link['active']) ? "active" : ""}} nav-link-size">{{$link['name']}}</a>
                </li>
            @endforeach
        </ul>
    </div>
</div>
