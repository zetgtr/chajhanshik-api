<template id="zakaz">
    <div class="modal modal fade modal-lk callme-modal modal-event-admin" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="moda-wrapper">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"></h5>

                    </div>
                    <div class="modal-body">
                        <div class="modal-warning">

                        </div>
                        <div class="modal-wrapper">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="buttons-extends"></div>
                        <button type="button" class="btn btn-sm btn-succsess modal-save">Сохранить</button>
                    </div>
                </div>
                <div class="modal-img-container">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <img class="modal-img" src="{{ asset('assets/img/modal.png') }}" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<template id="quickPhone">
    <form>
        <h4 class="name-product"></h4>
        <div class="editProfile__forms">
            <div class="form__group">
                <input class="control form-input" autocomplete="off" type="text" name="name" id="name" required="">
                <label class="form-label">Контактное лицо*</label>
            </div>
            <div class="form__group">
                <input class="control form-input" autocomplete="off" type="tel" name="phone" id="phone" required="" inputmode="text">
                <label class="form-label">Телефон*</label>
            </div>
            <div class="form__group">
                <input class="control form-input" autocomplete="off" type="tel" name="email" id="email" required="" inputmode="text">
                <label class="form-label">E-mail*</label>
            </div>
            <div class="form__group">
                <textarea class="control form-input form-textarea" autocomplete="off" type="text" name="quest" id="quest" rows="2" required=""></textarea>
                <label class="form-label">Вопрос</label>
            </div>
            <div class="form__group">
                <div class="checkbox">
                    <input type="checkbox" id="consent_checkbox" name="confident" checked="" required="">
                    <label for="confident">Нажимая на кнопку Отправить, Вы соглашаетесь с условиями обработки персональных данных
                    </label>
                </div>
            </div>
        </div>
    </form>
</template>
