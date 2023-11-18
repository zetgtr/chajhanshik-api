import { ModalWindow } from "./modal-main.js";
class Modal {
    static modal = new ModalWindow(document.querySelector('#eventModal'), true);
    constructor() {
        console.log(Modal.modal);
        this.btnOneClick = document.querySelector('.one-click-buy');
        if (this.btnOneClick) {
            this.btnOneClick.addEventListener('click', this.openModal.bind(this));
        }
    }
    createFormEdit() {
        let template = document.getElementById("editProfile");
        let body = template.content.cloneNode(true).firstElementChild;
        const nameProduct = this.btnOneClick.dataset.name;
        const idProduct = this.btnOneClick.dataset.id;
        const formName = this.btnOneClick.dataset.formname;
        const typeName = this.btnOneClick.dataset.type;
        const nameNode = body.querySelector('.name-product');
        const inputId = body.querySelector('.name-product-input');
        const inputFormName = body.querySelector('.name-form-input');
        const inputFormType = body.querySelector('.type-form-input');
        console.log(body);
        inputId.value = idProduct;
        inputFormName.value = formName;
        inputFormType.value = typeName;
        this.type = typeName
        nameNode.innerText = `Товар: ${nameProduct}`;

        const formItemsNode = body.querySelectorAll('.form__group');

        formItemsNode.forEach(formItem => {
            const inputNode = formItem.querySelector('input')
            if (inputNode.id === 'phone') {
                let im = new Inputmask("+7 (999) 999-99-99");
                im.mask(inputNode);
            }
            inputNode.addEventListener('input', () => {
                if (inputNode.value.length) {
                    formItem.classList.add('not-empty')
                    if (formItem.classList.contains('required')) {
                        formItem.classList.remove('required')
                    }
                } else {
                    formItem.classList.remove('not-empty');
                }
            })
        })
        this.bodyModal = body;
        return body
    }
    validateForm() {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');

        // Reset any previous validation error messages
        Modal.modal.deleteWarning();

        let isValid = true;

        // Validate Name field: Should have at least 2 characters and not contain any digits
        if (nameInput.value.trim().length < 2 || /\d/.test(nameInput.value)) {
            // this.showValidationError(nameInput, 'Имя должно содержать не менее 2 символов и не содержать цифр.');
            Modal.modal.insertWarning('Имя должно содержать не менее 2 символов и не содержать цифр.');
            isValid = false;
            return isValid
        }

        // Validate Phone field: Should be fully filled using the mask
        const phoneMask = "+7 (999) 999-99-99";
        if (phoneInput.value.trim().length !== phoneMask.length) {
            // this.showValidationError(phoneInput, 'Пожалуйста, укажите полный номер телефона.');
            Modal.modal.insertWarning('Пожалуйста, укажите полный номер телефона.');
            isValid = false;
            return isValid
        }

        // Validate Email field: Should be a valid email address
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            // this.showValidationError(emailInput, 'Пожалуйста, укажите действительный адрес электронной почты.');
            Modal.modal.insertWarning('Пожалуйста, укажите действительный адрес электронной почты.');
            isValid = false;
            return isValid
        }

        return isValid;
    }
    openModal() {
        const imgSrc = this.btnOneClick.dataset.img;
        Modal.modal.footerShow();
        Modal.modal.saveBtnHide();
        Modal.modal.removeModalClassSize('modal-xl');
        Modal.modal.removeModalClassSize('modal-lg');
        Modal.modal.addModalClassSize('modal-lg');
        Modal.modal.openModal();
        Modal.modal.insertTitle('Купить в один клик');
        Modal.modal.insertNodeBody(this.createFormEdit());
        Modal.modal.insertNodeImg(imgSrc);

        Modal.modal.addExtendButton({
            id: "send",
            name: "Отправить",
            type: "send",
            fn: async (e) => {
                const formData = new FormData(this.bodyModal);
                formData.append('pages', window.location.href)
                if (this.validateForm()) {
                    axios.post(`/api/form/${this.type}`, formData)
                    .then(({data}) => {
                        console.log(data);
                        if (data.status) {
                            Modal.modal.insertWarning(data.message, true);
                            setTimeout(() => {
                                Modal.modal.closeModal();
                            }, 1500)
                        } else {
                            Modal.modal.insertWarning(data.message);
                        }
                    })
                }
            }
        });
        Modal.modal.close_modal = () => {
            Modal.modal.deleteWarning();
            Modal.modal.opened_modal = () => { }
            Modal.modal.open_modal = () => { }
            Modal.modal.close_modal = () => { }
            Modal.modal.removeExtendButton('send');

        }

    }
}
const modalBuy = new Modal();
