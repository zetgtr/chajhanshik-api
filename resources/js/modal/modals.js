import { ModalWindow } from "./modal-main.js";
class Modals {
    static modal = new ModalWindow(document.querySelector('#zakaz'), true);
    constructor() {
        const btns = document.querySelectorAll('.open-modal');
        if (btns) {
            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.openModal(btn.dataset.templ, btn.dataset.title, btn.dataset.type, btn.dataset.formname);
                });
            });
        }
    }
    createFormEdit() {
        let template = document.getElementById(this.templId);
        let body = template.content.cloneNode(true).firstElementChild;

        const formItemsNode = body.querySelectorAll('.form__group');
        formItemsNode.forEach(formItem => {
            const inputNode = formItem.querySelector('input');
            const textareaNode = formItem.querySelector('textarea'); // Находим textarea внутри formItem
            if (inputNode) {
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
            }
            if (textareaNode) { // Если есть textarea внутри formItem
                textareaNode.addEventListener('input', () => {
                    if (textareaNode.value.length) {
                        formItem.classList.add('not-empty');
                        if (formItem.classList.contains('required')) {
                            formItem.classList.remove('required');
                        }
                    } else {
                        formItem.classList.remove('not-empty');
                    }
                });
            }
        })
        this.bodyModal = body;
        return body
    }
    validateForm() {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');

        // Reset any previous validation error messages
        Modals.modal.deleteWarning();

        let isValid = true;

        // Validate Name field: Should have at least 2 characters and not contain any digits
        if (nameInput.value.trim().length < 2 || /\d/.test(nameInput.value)) {
            // this.showValidationError(nameInput, 'Имя должно содержать не менее 2 символов и не содержать цифр.');
            Modals.modal.insertWarning('Имя должно содержать не менее 2 символов и не содержать цифр.');
            isValid = false;
            return isValid
        }

        // Validate Phone field: Should be fully filled using the mask
        const phoneMask = "+7 (999) 999-99-99";
        if (phoneInput.value.trim().length !== phoneMask.length) {
            // this.showValidationError(phoneInput, 'Пожалуйста, укажите полный номер телефона.');
            Modals.modal.insertWarning('Пожалуйста, укажите полный номер телефона.');
            isValid = false;
            return isValid
        }

        // Validate Email field: Should be a valid email address
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            // this.showValidationError(emailInput, 'Пожалуйста, укажите действительный адрес электронной почты.');
            Modals.modal.insertWarning('Пожалуйста, укажите действительный адрес электронной почты.');
            isValid = false;
            return isValid
        }

        return isValid;
    }
    openModal(templateId, title, type, formName) {
        this.title = title;
        this.templId = templateId;

        Modals.modal.footerShow();
        Modals.modal.saveBtnHide();
        Modals.modal.removeModalClassSize('modal-xl');
        Modals.modal.removeModalClassSize('modal-lg');
        Modals.modal.addModalClassSize('modal-lg');
        Modals.modal.openModal();
        Modals.modal.insertTitle(this.title);
        Modals.modal.insertNodeBody(this.createFormEdit());
        Modals.modal.addExtendButton({
            id: "send",
            name: "Отправить",
            type: "send",
            fn: async (e) => {
                const formData = new FormData(this.bodyModal);
                formData.append('pages', window.location.href);
                formData.append('form_name', formName);
                if (this.validateForm()) {
                    axios.post(`/api/form/${type}`, formData)
                        .then(({ data }) => {
                            console.log(data);
                            if (data.status) {
                                Modals.modal.insertWarning(data.message, true);
                                setTimeout(() => {
                                    Modals.modal.closeModal();
                                }, 1500)
                            } else {
                                Modals.modal.insertWarning(data.message);
                            }
                        })
                }
            }
        });
        Modals.modal.close_modal = () => {
            Modals.modal.deleteWarning();
            Modals.modal.opened_modal = () => { }
            Modals.modal.open_modal = () => { }
            Modals.modal.close_modal = () => { }
            Modals.modal.removeExtendButton('send');

        }

    }
}
const modalBuy = new Modals();
