import '@fancyapps/fancybox/dist/jquery.fancybox.css';
import '@fancyapps/fancybox';
import Swiper, { Navigation, Thumbs } from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    Swiper.use([Navigation, Thumbs]);

    const galleryThumbs = new Swiper(".productInfo__thumb-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
    });

    const galleryTop = new Swiper(".productInfo-slider", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    // Используйте готовность Swiper перед инициализацией FancyBox
    $('[data-fancybox="gallery"]').fancybox({
        beforeShow: function (instance, current) {
            console.log(galleryThumbs);
            // Остановка автопрокрутки Swiper
            if (galleryThumbs && galleryThumbs.autoplay) {
                galleryThumbs.autoplay.stop();
            }
            if (galleryTop && galleryTop.autoplay) {
                galleryTop.autoplay.stop();
            }
        },
        afterClose: function (instance, current) {
            // Запуск автопрокрутки Swiper после закрытия FancyBox
            if (galleryThumbs && galleryThumbs.autoplay) {
                galleryThumbs.autoplay.start();
            }
            if (galleryTop && galleryTop.autoplay) {
                galleryTop.autoplay.start();
            }
        }
    });
});
