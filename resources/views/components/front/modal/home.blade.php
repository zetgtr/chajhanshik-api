<template id="modal_home_body">
    <form>
        <div class="wrapper">
            <div class="inputbox">
                <input name="name" type="text">
                <span>Ваше имя</span>
                <i></i>
            </div>
            <div class="inputbox">
                <input name="tel" type="tel" data-maska="+7 ### ###-##-##">
                <span>Телефон</span>
                <i></i>
            </div>
            <div class="inputbox">
                <input name="email" type="text">
                <span>Email</span>
                <i></i>
            </div>
            <div class="form__group">
                <div class="checkbox">
                    <input type="checkbox" id="consent_checkbox" name="confident" checked="" required="">
                    <label for="item_popup">Нажимая на кнопку Отправить, Вы соглашаетесь с условиями обработки персональных данных
                    </label>
                </div>
            </div>
        </div>
    </form>
</template>
<template id="modal_home_footer">

    <div href="" class="button button-m button-click button--orange first__btn" id="modal_home_footer_submit" data-wow-delay="0.5s" type="submit" style="align-self: flex-end; margin-top: auto;">

        <span>Отправить</span>
        <b></b>
        <s></s>
    </div>
</template>
