<div
    class="col-lg-4 services_inner__item-container"
>
    <div class="aos-wrapper">
        <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-offset="200"
        >
            <div class="services_inner__item">
                <h2>{{ $item['title'] }}</h2>
                {{-- <div class="services_inner__item-logo-container">
                    <div class="services_inner__item-logo" >{!! $item['img'] !!}</div>
                    <span>{{ $item['title'] }}</span>
                </div> --}}
                <div class="services_inner__item-desc">{!! nl2br($item['desc']) !!}</div>
                <div class="count">{{ $index + 1 }}</div>
            </div>
        </div>
    </div>
</div>
