class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.phoneInput = this.form.querySelector('input[name="phone"]');
        this.submitButton = this.form.querySelector('button[type="submit"]');
        this.messageDiv = document.querySelector('#cart-message');

        let im = new Inputmask("+7 (999) 999-99-99");
        im.mask(this.phoneInput);

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (event) => this.validateForm(event));

        // Добавляем обработчик события input для всех обязательных полей
        const requiredInputs = this.form.querySelectorAll('.required input, .required textarea');
        requiredInputs.forEach((input) => {
            input.addEventListener('input', () => this.hideMessage());
        });
    }

    validateForm(event) {
        event.preventDefault();

        const nameInput = this.form.querySelector('input[name="name"]');
        const emailInput = this.form.querySelector('input[name="email"]');
        const commentTextarea = this.form.querySelector('textarea[name="comment"]');

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const phoneValue = this.phoneInput.value.trim();
        const commentValue = commentTextarea.value.trim();

        if (nameValue.length < 3) {
            this.showMessage('Имя должно содержать хотя бы 3 символа');
            return;
        }

        if (/\d/.test(nameValue)) {
            this.showMessage('Имя не должно содержать цифры');
            return;
        }

        if (!this.isEmailValid(emailValue)) {
            this.showMessage('Введите корректный email');
            return;
        }

        if (!this.isPhoneValid(phoneValue)) {
            this.showMessage('Введите корректный телефон в формате +7 (999) 999-99-99');
            return;
        }

        this.hideMessage();
        const formData = {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            comment: commentValue,
        };

        // Отправляем данные на сервер с помощью Axios
        this.sendFormData(formData);
    }
    sendFormData(formData) {
        axios.post('/cart/order', formData)
            .then(response => {
                // Обработка успешного ответа сервера, если необходимо
                console.log('Заказ успешно отправлен:', response.data);
                // this.form.reset(); // Сброс формы после успешной отправки
                this.showMessage('Ваш заказ успешно отправлен', true);
                setTimeout(() => {
                    window.location.href = '/thanks'
                },2300)

            })
            .catch(error => {
                // Обработка ошибок при отправке на сервер, если необходимо
                console.error('Ошибка при отправке заказа:', error);
                this.showMessage('Ошибка при отправке заказа. Пожалуйста, попробуйте ещё раз.');
            });
    }
    showMessage(message, flag = null) {
        this.messageDiv.textContent = message;
        this.messageDiv.classList.add('show');
        if (flag != null) {
            this.messageDiv.classList.add('agree');
        }
        // setTimeout(() => {
        //     this.messageDiv.style.opacity = '1';
        // }, 50); // Delay for smooth animation
    }

    hideMessage() {
        // this.messageDiv.style.opacity = '0';
        this.messageDiv.classList.remove('show');
        if (this.messageDiv.classList.contains('agree')) {
            this.messageDiv.classList.remove('agree');
        }
    }

    isEmailValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    isPhoneValid(phone) {
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return phonePattern.test(phone);
    }
}

// Использование класса для вашей формы
const formValidator = new FormValidator('order_send');
