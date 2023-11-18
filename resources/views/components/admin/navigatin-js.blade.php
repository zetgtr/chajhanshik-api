<link id="style" href="{{asset('assets/css/admin/menu-style.css')}}" rel="stylesheet" />
<div class=" tab-menu-heading">
    <div class="tabs-menu1">
        <ul class="nav panel-tabs">
            @foreach($links as $link)
            <li><a href="#{{$link['url']}}" class="{{!empty($link['active']) ? "active" : ""}} nav-link-size" data-bs-toggle="tab">{{$link['name']}}</a></li>
            @endforeach
        </ul>
    </div>
</div>
