<div class="form">
    <form id="myForm">
        <div class="form__wrapper">
            <x-front.order.input text='Введите ваше имя' value="" name="name" label="Ваше имя"  />
            <x-front.order.input value="" name="company" label="Компания"  />
            <x-front.order.input text='Введите ваш телефон' value="" name="tel" label="Телефон" type='tel'  />
            <x-front.order.input text='Введите ваш email' value="" name="email" label="Email"  />

            <div class="container-price">
                <input type="hidden" id='price' name='price' value='100 000 - 300 000'>
                <div class="irs--wrap">
                    <span class="span">Бюджет проекта 123</span>
                    <div id="slider"></div>
                </div>
            </div>
            {{-- <x-front.order.budget-dropdown :options="[1000, 5000, 10000]" :placeholder="'Бюджет проекта'" /> --}}
            {{-- <x-front.order.budget-dropdown :options="[1000, 5000, 10000]" :placeholder="'Откуда узнали о нас'" /> --}}
            <x-front.order.input-textarea value="" name="desc" :placeholder="'Откуда узнали о нас'" />

            <div class="file">
                <span>В чём заключается задача? Какие сроки реализации?<br />
                    Несколько слов о компании.
                </span>
                <div class="order__upload">
                    <label class="file-input__label" for="myfile">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.8545 9.96878L10.6797 11.1438L7.38924 14.4342C6.10061 15.7225 4.00324 15.7225 2.71384 14.4337C1.42467 13.1449 1.42503 11.0477 2.71384 9.75877L4.5944 7.87803L10.198 2.27443C11.0792 1.39327 12.5139 1.39327 13.3953 2.27443C14.2765 3.15595 14.2765 4.59019 13.3953 5.47175L9.78949 9.07723L8.36797 10.4986L6.51495 12.3518C6.05288 12.8138 5.30105 12.8133 4.83935 12.3518C4.37728 11.8897 4.37728 11.1377 4.83935 10.6756L7.52566 7.98948L8.11352 7.40126L10.6249 4.89022L9.84196 4.10745L6.74307 7.20635L4.05639 9.8937C3.16319 10.7865 3.16301 12.2409 4.05639 13.1348C4.95012 14.0282 6.40431 14.0282 7.2975 13.1348L8.9874 11.4447L10.5722 9.85996L14.1775 6.2543C15.4907 4.94148 15.4907 2.80502 14.1775 1.49161C12.8646 0.178416 10.7278 0.178416 9.41477 1.49161L6.65956 4.24718L3.91141 6.99533L1.93138 8.97572C0.210902 10.696 0.210902 13.4958 1.93138 15.2162C3.65186 16.9369 6.45126 16.9369 8.17188 15.2162L12.637 10.7511L14.8207 8.56753L14.0383 7.78457L11.8545 9.96878Z"
                                fill="#00779F"></path>
                        </svg>
                        Прикрепить файл
                    </label>
                    <input class="input file-input" type="file" name="attach[]" multiple="" id="myfile">
                </div>
            </div>
            <div class="file-display--container d-none">
                <div class="mb-2 small">Список файлов:</div>
                <div class="file-display small" id="file_display" ref="fileDisplay"></div>
                <div class="btn-del">
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                </div>
            </div>
            <div class="subm">

                <x-front.button id="btn_order_submit" class="button button-click button--orange" text="Отправить" dopClass='ala' />

                <p class="sogl">
                    Нажимая на кнопку «Отправить», вы даете согласие на обработку
                    персональных данных и соглашаетесь с политикой конфиденциальности.
                </p>
            </div>
        </div>
    </form>
</div>

@vite('resources/js/forms/order.js')
@vite('resources/js/utils/slider.js')
@vite('resources/js/utils/dropdown.js')
@vite('resources/assets/scss/components/irs.scss')
