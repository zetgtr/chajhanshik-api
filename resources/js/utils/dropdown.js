// (() => {
//     let dropdown = document.querySelectorAll('.dropdown');
//     dropdown.forEach(el => el.addEventListener('click', (e) => {
//         e.target.closest('.dropdown').classList.toggle('active');
//     }));

//     let option = document.querySelectorAll('.option');
//     option.forEach(el => {
//         el.querySelectorAll('div').forEach(el => {
//             el.addEventListener('click', (e) => {
//                 // console.dir(e.target.innerHTML);
//                 console.log(e.target);
//                 e.target.closest('.option').previousElementSibling.value = e.target.innerHTML;
//                 // textBox.value = e.target.innerHTML
//             })
//         })
//     })

// })();

((w, d) => {
    const form = d.getElementById('form__zakaz');
    const ds = d.getElementById('file_display');
    const input_f = d.getElementById('myfile');
    if (!input_f) return true;

    input_f.onchange = function () {
        ds.innerHTML = '';

        if (this.files.length == 0) ds.closest('.file-display--container').classList.add('d-none');
        else ds.closest('.file-display--container').classList.remove('d-none');

        [].forEach.call(this.files, el => {
            let file_name = document.createElement('div');
            file_name.innerText = el.name;
            ds.append(file_name);
        });
    };



    const fileInput = document.querySelector('.file-input');
    const fileDisplayContainer = document.querySelector('.file-display--container');

    // Функция для очистки
    function clearInputAndDisplay() {
        // Очищаем поле ввода
        fileInput.value = '';

        // Удаляем все файлы из "file-display"
        const fileDisplay = fileDisplayContainer.querySelector('.file-display');
        fileDisplayContainer.classList.add('d-none')
        while (fileDisplay.firstChild) {
            fileDisplay.removeChild(fileDisplay.firstChild);
        }
    }

    // Назначаем обработчик события при нажатии на элемент "Очистить"
    const clearButton = document.querySelector('.btn-del');
    clearButton.addEventListener('click', clearInputAndDisplay);
})(window, document);

(() => {

    let selector = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask("+7 (999) 999-99-99");

    Array.from(selector).forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                im.mask(this);
            }
        });

        // input.addEventListener('blur', function () {
        //     if (this.value.trim() === '') {
        //         im.remove(this);
        //     }
        // });
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

})();
