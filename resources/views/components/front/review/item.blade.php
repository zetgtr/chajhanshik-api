@foreach($items as $index=>$item)
    <div class="aos-wrapper" data-action="{{$index+$count}}">
    <div data-aos="fade-up" data-aos-easing="ease-out-cubic">
        <div class="review__item">
            <div class="row">
                <div class="col-xl-5" style="display: flex; flex-direction: column">
                    <h2>{{ $item['title'] }}</h2>
                    <div class="review__item-logo">
                        <img src="{{$item['logo']}}" alt="" />
                    </div>
                </div>
                <div class="col-xl-7" style="display: flex; flex-direction: column">
                    <div class="medal-container">
                        @if($item['medal'])
                            <div class="medal">{!!  $item['medal'] !!}</div>
                        @endif
                        <div class="medal_text">
                            {{ $item['medal_text'] }}
                        </div>
                    </div>
                    <div class="desc" >{!! $item['desc'] !!}</div>
                    <Fancybox
                        style="margin-top: auto"
                        :options="{
                Carousel: {
                  infinite: false,
                },
              }"
                    >
                        <a class="more" data-fancybox="gallery" href="{{$item['img']}}"
                        ><span>Смотреть оригинал</span
                            ><svg
                                width="38"
                                height="12"
                                viewBox="0 0 38 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_6_2)">
                                    <path
                                        d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z"
                                        fill="black"
                                    ></path>
                                    <rect x="7" y="5" width="2" height="2" fill="white"></rect>
                                    <rect x="3" y="5" width="2" height="2" fill="white"></rect>
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_2">
                                        <rect width="38" height="12" fill="white"></rect>
                                    </clipPath>
                                </defs></svg
                            ></a>
                    </Fancybox>
                </div>
            </div>
            <div class="hover">
                <svg
                    width="385"
                    height="324"
                    viewBox="0 0 385 324"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z"
                        fill="#EF7F1A"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</div>
@endforeach
