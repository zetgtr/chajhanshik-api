import { message } from "../../utils/message.js";
import CartDelivery from "./cart_delivery.js";
export class Cart {
    constructor() {
        this.countIcon = document.querySelector('.cart__total-count');
        this.cart = [];
        this.count = 0;
        this.priceMinDelivery = 5000
        this.priceDelivery = 300
        this.totalCostElement = document.querySelector('.cart__all-price span');
        this.cartContainer = document.querySelector('.cart-order');

        this.btnSend = document.querySelector('.send-order');
        this.lico = document.querySelector('#lico');
        if (this.lico) {
            this.lico.addEventListener('change', () => this.handleLicoChange());
        }

        this.addEvent();
        this.getProducts();

        this.deliveryFlag = false
        if (document.querySelector('.cart--delivery')) {
            this.CartDelivery = new CartDelivery();
            this.dostavka = document.querySelector('.dost')
            this.deliveryFlag = true;
            this.delivberyPrice = document.querySelectorAll('.cart__all-price-title-main')
        }


    }
    handleLicoChange() {
        const selectedOption = this.lico.value;
        if (selectedOption === 'fiz-lico') {
            this.btnSend.innerText = 'Оплатить заказ';
        } else {
            this.btnSend.innerText = 'Оформить заказ';
        }
    }

    getProducts() {
        axios.post('/cart/get')
            .then(({ data }) => {
                this.cart = data
            })
    }
    updateCount() {
        this.countIcon.innerText = this.count
    }
    updateTotalCost(totalPrice) {
        if (this.totalCostElement) {
            this.totalCostElement.innerText = totalPrice; // Предполагаем, что цены имеют тип числа с плавающей запятой
        }
        if (this.deliveryFlag) {

            if (totalPrice < this.priceMinDelivery) {
                this.dostavka.innerText = this.priceDelivery;
                this.delivberyPrice.forEach(el => {
                    el.innerText = totalPrice + this.priceDelivery
                });
                this.totalPrice = totalPrice + this.priceDelivery
            }
            else {
                this.dostavka.innerText = 0;
                this.delivberyPrice.forEach(el => {
                    el.innerText = totalPrice
                });
                this.totalPrice = totalPrice
            }

        }
    }

    addEvent() {
        this.btnsAdd = document.querySelectorAll('.add_cart');
        this.btnsDel = document.querySelectorAll('.del_cart');
        this.btnsRem = document.querySelectorAll('.rem_cart');
        this.init()
    }
    init() {
        this.btnsAdd.forEach(el => {
            el.addEventListener('click', () => {
                this.addToCart(el);
            })
        });
        this.btnsDel.forEach(el => {
            el.addEventListener('click', () => {
                this.removeToCart(el);
            })
        });
        this.btnsRem.forEach(el => {
            el.addEventListener('click', () => {
                this.deleteToCart(el);
            })
        });

    }
    emptyCart() {
        this.cartContainer.classList.add('no_color')
        this.cartContainer.innerHTML = `
        <div class="empty-cart">
        <p>Корзина пуста</p>
        <a href="/catalog" class="button">Перейти в каталог</a>
    </div>
        `
    }
    addToCart(el) {
        const id = el.dataset.id;
        let count = el?.closest('.cart-order__item')?.querySelector('.counter__count') ?? 1;
        let flag = false;
        this.cart.forEach(el => {
            if (id == el.id) {
                ++el.count;
                count = el.count
                flag = true
            }
        });
        if (!flag) {
            this.cart.push({ id, count })
        }
        this.updateCountProduct(el, 'plus', count)
        axios.post('/cart/add', { id, count })
            .then(({ data }) => {
                this.count = data.count;
                this.updateCount();
                // TODO
                console.log(data);
                if (data.status == true) {
                    this.updateTotalCost(data.total);

                    message({ title: "Товар успешно добавлен", content: "Мы сохранили этот товар для Вас." }, 'success', false, 6000);
                } else {
                    message("Произошла ошибка", 'error', false, 6000)
                }
            })
            .catch(error => {
                // Обработка ошибки и отображение сообщения об ошибке
                console.error(error);
                message("Произошла ошибка при добавлении товара", 'error', false, 6000);
            });
    }
    removeToCart(el) {
        const id = el.dataset.id;
        let count = el.closest('.cart-order__item').querySelector('.counter__count');
        this.cart.forEach(el => {
            if (id == el.id) {
                --el.count;
                if (el.count <= 0) {
                    count = 0;
                } else {
                    count = el.count
                }
            }
        });
        this.updateCountProduct(el, 'minus', count)
        axios.post('/cart/remove', { id, count })
            .then(({ data }) => {
                this.count = data.count;
                this.updateCount();
                if (data.status == true) {
                    this.updateTotalCost(data.total);

                    message({ title: "Товар успешно удален", content: "Мы удалили этот товар для Вас." }, 'success', false, 6000);
                } else {
                    message("Произошла ошибка", 'error', false, 6000)
                }
            })
            .catch(error => {
                // Обработка ошибки и отображение сообщения об ошибке
                message("Произошла ошибка при удалении товара", 'error', false, 6000);
            });
    }
    deleteToCart(el) {
        const id = el.dataset.id;
        this.cart = this.cart.filter(item => item.id !== id);
        this.updateCountProduct(el, 'delete')
        axios.post('/cart/delete', { id })
            .then(({ data }) => {
                this.count = data.count;
                this.updateCount();
                if (data.status == true) {
                    this.updateTotalCost(data.total);

                    message({ title: "Товар успешно удален", content: "Мы удалили этот товар для Вас." }, 'success', false, 6000);
                } else {
                    message("Произошла ошибка", 'error', false, 6000)
                }

            })
    }
    updateCountProduct(el, operator, count = 0) {
        const cartItem = el.closest('.cart-order__item');
        if (cartItem) {
            const counterCountElement = cartItem.querySelector('.counter__count');
            if (counterCountElement) {
                let currentCount = parseInt(counterCountElement.innerText);

                if (operator === "plus") {
                    currentCount = count;
                } else if (operator === "minus") {
                    currentCount = count;
                } else if (operator === "delete") {
                    currentCount = 0;
                }

                if (currentCount === 0) {
                    const id = el.dataset.id;
                    this.cart = this.cart.filter(el => id != el.id);
                    cartItem.style.animation = "fadeOut 0.3s";
                    setTimeout(() => {
                        cartItem.remove();
                    }, 300);
                    if (this.cart.length == 0) {
                        this.emptyCart()
                    }
                } else {
                    counterCountElement.innerText = currentCount;
                }
            }
        } else {
            // Если находимся на странице без корзины, ничего не делаем
            console.log("На данной странице нет корзины.");
        }
    }

}
window.CartClass = new Cart();
