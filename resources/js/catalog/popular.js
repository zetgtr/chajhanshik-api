import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {
    const popularSlider = new Swiper(".popular-slider", {
        spaceBetween: 10,
        slidesPerView: 1.3,
        navigation: {
            nextEl: ".product__popular__next",
            prevEl: ".product__popular__prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            }
        }
    });

    const btns = document.querySelector('.product__popular__btns');

    function updateButtonsVisibility() {
        // Проверяем, нужно ли показывать кнопки навигации
        if (popularSlider.slides.length > popularSlider.params.slidesPerView) {
            btns.classList.remove('d-none'); // Убираем класс, который скрывает кнопки
        } else {
            btns.classList.add('d-none'); // Иначе добавляем класс, чтобы скрыть кнопки
        }
    }

    popularSlider.on('resize', () => {
        popularSlider.update(); // Обновим слайдер
        updateButtonsVisibility();
    });

    // Используем observerUpdate для отслеживания изменений в слайдере
    popularSlider.on('observerUpdate', () => {
        updateButtonsVisibility();
    });

    // Вызываем функцию для проверки при загрузке страницы
    updateButtonsVisibility();
});
