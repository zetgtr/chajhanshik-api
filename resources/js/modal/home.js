import { myModal } from "./index";
import { message } from "./../utils/message";



$(document).ready(() => {
    const modal = new myModal(true)
    function success() {
        const formData = Object.fromEntries(new FormData(modal.getBody().querySelector('form')))
        formData.pages = window.location.href;
        axios.post('api/form/feedback', formData).then(({ data }) => {
            modal.message(data);
            setTimeout(() => {
                modal.destroy();
                window.location.href = '/thanks/'
            }, 1000)
        }).catch(() => {
            message(data.message, 'error', false, 6000);
        });

    }
    $('#btn_home_modal').on('click', () => {
        modal.setTitle('Оставить заявку')
        modal.setBodyTemplate('modal_home_body')
        modal.setFooterTemplate('modal_home_footer')
        modal.setAddEventFooterBtn('#modal_home_footer_submit', success)
        let selector = modal.getBody().querySelectorAll('input[type="tel"]');
        let im = new Inputmask("+7 (999) 999-99-99");

        Array.from(selector).forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.trim() !== '') {
                    im.mask(this);
                } else {
                    im.remove(this);
                }
            });

            input.addEventListener('blur', function () {
                if (this.value.trim() === '') {
                    im.remove(this);
                }
            });
        });

        const formInpunts = document.querySelectorAll(".inputbox");
        IsInputEmpty(formInpunts);

        function IsInputEmpty(inputsArray) {
            inputsArray.forEach((item) => {
                item.oninput = (e) => {
                    let inputGroup = e.target.closest(".inputbox");
                    let inputItem = inputGroup.querySelector("input");
                    if (inputItem.value !== "") {
                        inputGroup.classList.add("has-value");
                    } else {
                        inputGroup.classList.remove("has-value");
                    }
                };
            });
        }
        modal.show()
    })
})
