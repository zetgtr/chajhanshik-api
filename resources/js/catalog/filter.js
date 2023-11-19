import {
    Cart
} from "./cart/cart.js";
class Filter {
    constructor() {
        this.range = {};
        this.popular = null;
        this.hardness = null;
        this.url = window.location.href.split('?')[0].split('/').pop();
        this.filteredProductsCount = 0;
        this.filteredItems = [];
        this.messageBlock = null; // Добавляем переменную для хранения ссылки на текущее сообщение
        this.container = document.querySelector('.catalog__wrapper-products-container');
        this.preloader = document.querySelector('.preloader-container');
        this.initEventListeners();

        this.filterBtn = document.querySelector('.button-drawer');
        this.backdrop = document.querySelector('.sidebar');
        this.train = document.querySelector('.sidebar__train');


        this.messageMobileNode = document.querySelector('.message-search');
        this.initHandlerBtn()
    }

    initHandlerBtn() {
        this.filterBtn.addEventListener('click', () => {
            this.openDrawer()
        })
        if (window.innerWidth < 1199) {
            this.backdrop.addEventListener('click', (e) => {
                if (e.target.id == 'rail') this.closeDrawer()
            })
        }
    }
    closeDrawer() {
        this.train.classList.remove('sidebar_open');
        setTimeout(() => {
            document.body.classList.remove('sidebar-open');
            this.filterBtn.classList.remove('d-none');
            this.backdrop.classList.remove('sidebar_open');
        }, 400);
    }
    openDrawer() {
        console.log('open');
        this.filterBtn.classList.add('d-none');
        document.body.classList.add('sidebar-open');
        this.backdrop.classList.add('sidebar_open')
        setTimeout(() => {
            this.train.classList.add('sidebar_open');
        }, 0);
    }


    initEventListeners() {
        this.initSlider();

        const priceSlider = document.querySelector('.filter-range');
        const popularCheckboxes = document.querySelectorAll('.popular-filter .ware-filter-input_ch input[type="checkbox"]');

        popularCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', this.handleRangeChange.bind(this));
        });

        const checkboxes = document.querySelectorAll('.metall-filter .ware-filter-input_ch input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', this.handleChange.bind(this));
        });
    }

    // TODO
    async handleChange(event) {
        const selected = {};
        const checkboxes = document.querySelectorAll('.ware-filter-input_ch input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            selected[checkbox.name] = checkbox.checked ? 1 : undefined;
        });

        this.checkbox = selected;

        await this.filterProducts();
        if (window.innerWidth > 1199) {
            this.createMessageBlock(event.target.parentNode);
        } else {
            this.createMessageBlockMobile()
        }

        this.updateURLWithCheckboxParams(); // Обновите URL с новыми параметрами
    }

    async handleHardnessChange(event) {
        const selectedHardness = {};
        const checkboxes = document.querySelectorAll('.hardness-filter-input_ch input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            selectedHardness[checkbox.name] = checkbox.checked ? 1 : undefined;
        });

        this.hardness = selectedHardness; // Установите значения в объект this

        await this.filterProducts();
        if (window.innerWidth > 1199) {
            this.createMessageBlock(event.target.parentNode);
        } else {
            this.createMessageBlockMobile()
        }

        this.updateURLWithHardnessParams(); // Обновите URL с новыми параметрами
    }
    updateURLWithCheckboxParams() {
        const params = new URLSearchParams(window.location.search);

        if (this.checkbox) {
            Object.entries(this.checkbox).forEach(([name, value]) => {
                if (value !== undefined) {
                    params.set(`checkbox[${name}]`, value);
                } else {
                    params.delete(`checkbox[${name}]`);
                }
            });
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }

    updateURLWithHardnessParams() {
        const params = new URLSearchParams(window.location.search);

        if (this.hardness) {
            Object.entries(this.hardness).forEach(([name, value]) => {
                if (value !== undefined) {
                    params.set(`hardness[${name}]`, value);
                } else {
                    params.delete(`hardness[${name}]`);
                }
            });
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }
    //
    createMessageBlockMobile() {
        let message;
        if (this.filteredProductsCount === 1) {
            message = `Найден ${this.filteredProductsCount} товар`;
        } else if (this.filteredProductsCount > 1 && this.filteredProductsCount < 5) {
            message = `Найдено ${this.filteredProductsCount} товара`;
        } else {
            message = `Найдено ${this.filteredProductsCount} товаров`;
        }

        let span = this.messageMobileNode.querySelector('span');
        span.innerHTML = message;
        this.messageMobileNode.classList.add('show');
        setTimeout(() => {
            this.messageMobileNode.classList.remove('show');
        }, 3000);
    }
    initSlider() {
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            skin: "round",
            onFinish: this.handleSliderChange.bind(this),
        });
    }

    async handleSliderChange(data) {
        const params = new URLSearchParams(window.location.search);
        this.range[data.input[0].dataset.alias] = {
            min: parseFloat(data.from),
            max: parseFloat(data.to)
        };
        params.set(`range[${data.input[0].dataset.alias}]['min']`, parseFloat(data.from));
        params.set(`range[${data.input[0].dataset.alias}]['max']`, parseFloat(data.to));
        await this.filterProducts();
        const parentElement = document.querySelector('.irs--wrap');
        if (window.innerWidth > 1199) {
            this.createMessageBlock(parentElement);
        } else {
            this.createMessageBlockMobile()
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }

    async filterProducts() {
        try {
            this.showPreloader();

            const data = {
                range: this.range,
                checkbox: this.checkbox,
                url: this.url
            };

            const response = await axios.post('/api/get_filter', data);
            const viewCard = await axios.post('/api/get_filter_view', data);
            this.filteredProductsCount = response.data.count;
            this.filteredItems = response.data.items;
            this.updateUI(viewCard.data);
            this.hidePreloader();
        } catch (error) {
            console.error('Error while filtering products:', error);
            this.hidePreloader();
        }
    }
    showPreloader() {
        this.preloader.classList.remove('d-none') // Показываем прелоадер
    }

    hidePreloader() {
        this.preloader.classList.add('d-none') // Скрываем прелоадер
    }
    updateUI(data) {
        console.log(data);
        const container = this.container;
        container.innerHTML = '';
        container.innerHTML = data;

        window.CartClass = new Cart();

        const url = new URL(document.location);
        const searchParams = url.searchParams;
        searchParams.delete("page"); // удалить параметр "test"
        window.history.pushState({}, '', url.toString());

    }
    createMessageBlock(parentElement) {
        if (this.messageBlock) {
            this.messageBlock.remove();
        }

        const message = `Найдено ${this.filteredProductsCount}`;

        this.messageBlock = document.createElement('div');
        this.messageBlock.className = 'message-block';
        this.messageBlock.textContent = message;

        parentElement.appendChild(this.messageBlock);

        const parentRect = parentElement.getBoundingClientRect();
        const parentTop = parentRect.top + window.scrollY;
        const parentLeft = parentRect.left + window.scrollX;
        const parentHeight = parentRect.height;

        this.messageBlock.style.position = 'absolute';
        this.messageBlock.style.left = `${parentLeft - 23 - this.messageBlock.offsetWidth}px`;
        // this.messageBlock.style.top = `${parentTop}px`;

        const messageBlockHeight = this.messageBlock.offsetHeight;
        const topOffset = (parentHeight - messageBlockHeight) / 2;
        this.messageBlock.style.top = `${parentTop + topOffset}px`;

        this.messageBlock.addEventListener('click', this.applyFilter.bind(this));
        // setTimeout(() => {
        //     this.messageBlock.classList.add('fade-out'); // Add fade-out class for animation
        // }, 6000);
    }

    applyFilter() {
        // Ваш код для применения фильтра и обработки клика на сообщение
        // Например, можно выполнять дополнительные действия или отправлять форму
        console.log('Filter applied!');

        // Если необходимо скрыть сообщение после применения фильтра, раскомментируйте следующую строку:
        // this.messageBlock.remove();
    }
}

const filterInstance = new Filter();
window._Filter = filterInstance;
