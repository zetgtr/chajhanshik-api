export function panel_editor_fucken() {
    //$ar = '{"header":[],"type":[],"data":[]}';
    return function ($ar, id) {
        console.log($ar);
        var table_type2 = ["text", "textarea", "img", "array", "php"];
        var type_open = "render";
        //полный массив редактирования

        //ячейка массива для сохранения col и row
        var select_ = [];
        var selectHtmlClass = ".panel_table";
        //дополнительные переменные
        var turnAjax = {
            status: true,
            data: [],
        };
        var position_cursor;
        var mask = {};
        var arrayTableDbFlag = "whtie";
        var timeMenuAnimation = [];
        var timeMenuAnimationStatus = false;
        //перебор таблицы
        this.visited_table = function ($array) {
            var colorAll = "";
            if (
                all_table_array.mask != undefined &&
                select_[0] != undefined &&
                all_table_array.mask != select_[0].row
            ) {
                var $eval = "all_table_array";
                select_.forEach(function (val, key) {
                    $eval = $eval + ".data";
                    if (key == 0) {
                        $eval = $eval + "[" + all_table_array.mask + "]";
                    } else {
                        $eval = $eval + "[0]";
                    }
                    if (key != select_.length) {
                        $eval = $eval + "[" + val.col + "]";
                    }
                });
                if (eval($eval) != undefined) {
                    mask = JSON.parse(JSON.stringify(eval($eval)));
                    mask.header.forEach(function (val, key) {
                        if (
                            table_array.header[key] == undefined ||
                            (table_array.header == "" &&
                                table_array.data.length == 0)
                        ) {
                            table_array.header[key] = mask.header[key];
                            table_array.type[key] = mask.type[key];
                            table_array.data.forEach(function (val2, key2) {
                                table_array.data[key2][key] = "";
                            });
                        }
                    });
                } else {
                    colorAll = "background: #ffdede;";
                }
            } else {
                colorAll = "background: white;";
            }

            var html = '        <div class="col-2">';
            if (select_.length > 0) {
                html =
                    html +
                    ' <div><label>Тип массива</label></div>\
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">\
                            <label class="btn btn-outline-primary btn-sm clRS" id="DataBase">\
                                <input onchange="change_arrayDB_type(\'DataBase\');" type="radio" name="options" id="option1" autocomplete="off" checked> Database\
                            </label>\
                            <label class="btn btn-outline-primary btn-sm active clRS" id="array">\
                                <input type="radio" name="options" id="option2" autocomplete="off"> Array\
                            </label>\
                        </div>';
            }
            if (select_.length > 0) {
                var width = "100px";
            } else {
                var width = "140px";
            }
            html =
                html +
                ' </div>\
                    <div class="table-responsive"><table class="table" style="position: relative;"><tbody onselectstart="return false"><tr><th style="width: ' +
                width +
                ';">Alias</th>';
            table_array.header.forEach(function (item, key) {
                var color = "";
                if (colorAll == "" && item != mask.header[key]) {
                    color = "background: #ffdede;";
                }
                // html = html + '<th><div style="display: flex; min-width: 150px;"><input oninput="name_col_change(this);" class="form-control" style="'+color+colorAll+'" type = "text" value="'+item+'" placeholder="Название столбца" oninput="change_alias(this);"><button type="button" class="remove" onclick="delete_col(this);"></button></div></th>';
                html =
                    html +
                    '<th><div style="display: flex; min-width: 150px;"><input oninput="name_col_change(this);" class="form-control" style="' +
                    color +
                    colorAll +
                    '" type = "text" value="' +
                    item +
                    '" placeholder="Название столбца" oninput="change_alias(this);"><button type="button" class="open_menu" onclick="all_menu(this);"></button><div class="menu_table"><button onclick="key_col(this);" class="key"></button><button onclick = "left_col(this);" class="left"></button><button onclick="right_col(this);" class="right"></button><button class="delete_R" onclick="delete_col(this);"></button></div></div></th>';
            });
            html =
                html +
                '<th rowspan="' +
                (table_array.data.length + 3) +
                '" style="width: 18px; min-width: 18px; background: #28a745; color: white; text-align: center; vertical-align: middle; cursor: pointer; background-image: url(\'/infusions/panel_editor/images/simple-dashed.png\'); padding: 0px;" onclick="add_col(this)">+</th></tr><tr><th>Тип данных</th>';
            table_array.type.forEach(function (item2, key) {
                var color = "";
                if (colorAll == "" && item2 != mask.type[key]) {
                    color = "background: #ffdede;";
                }
                html =
                    html +
                    "<th>" +
                    table_type(item2, color + colorAll) +
                    "</th>";
            });
            html = html + "</tr>";
            table_array.data.forEach(function (data, key2) {
                html =
                    html +
                    '<tr><th><div style="    display: flex; justify-content: space-between;"><button style="color: white; border: none; width: 36px; height: 36px; background: #4285f4; cursor: pointer;" type="button" onmousedown="transfer_row(this);"><i class="fas fa-expand-arrows-alt"></i></button>';
                if (select_.length < 1) {
                    if (table_array.mask == key2) {
                        html =
                            html +
                            '<button type="button" style="border: none; height: 36px; width: 36px; color: white; background: #4285f4; cursor: pointer;" onclick="select_mask(this)"><i class="fas fa-clone"></i></button>';
                    } else {
                        html =
                            html +
                            '<button type="button" style="border: none; height: 36px; width: 36px; color: white; background: #4285f4; cursor: pointer;" onclick="select_mask(this)"><i class="far fa-clone"></i></button>';
                    }
                }
                html =
                    html +
                    '<button type="button" style="border: none; height: 36px; width: 36px; color: white; background: #ea3f30; cursor: pointer;" onclick="delete_row(this)"><i class="fas fa-trash-alt"></i></button></div></th>';
                data.forEach(function (datael, key) {
                    html =
                        html + "<th>" + input_edit(key, datael, key2) + "</th>";
                });
                html = html + "</tr>";
            });
            html =
                html +
                '<tr> <th colspan="' +
                (table_array.header.length + 1) +
                '" style="background: #4285f4; padding: 5px; cursor: pointer; color: white ; text-align: center;  background-image: url(\'/infusions/panel_editor/images/simple-dashed.png\'); padding: 0px;" onclick="add_row(this)">+</th></tr></tbody></table></div>';
            return html;
        };

        this.render = function () {
            $(selectHtmlClass).html(visited_table());

            var key = table_array["type"].indexOf("key");

            // $('.panel_table table tr:first-child>th:nth-child(2) .key').css('background','black');
            if (key != -1) {
                //все ключи становяться серыми
                $(".panel_table table .menu_table>.key")
                    .not(
                        ".panel_table table tr:first-child>th:nth-child(" +
                            (key + 2) +
                            ") .key"
                    )
                    .css({
                        color: "#bbbbbb",
                        cursor: "default",
                    });
                //текущий ключ становится золотым
                $(
                    ".panel_table table tr:first-child>th:nth-child(" +
                        (key + 2) +
                        ") .key"
                ).css("color", "gold");
                //убирается поле типа
                $(
                    ".panel_table table tr:nth-child(2)>th:nth-child(" +
                        (key + 2) +
                        ")"
                )
                    .css("border", "none")
                    .html('<i class="fas fa-key"></i>')
                    .children("i")
                    .css({
                        width: "100%",
                        color: "gold",
                        "text-align": "center",
                        "text-shadow": "0px 0px 2px black",
                        "font-size": "24px",
                        position: "relative",
                        top: "-20px",
                    });
                //в поле алиас выводиться слово key и поле становиться зеленым
                $(
                    ".panel_table table tr:first-child>th:nth-child(" +
                        (key + 2) +
                        ") input"
                )
                    .css({
                        opacity: "0",
                    })
                    .prop("disabled", true);
            }
            //проверка на кей
        };

        //типы таблицы
        this.table_type = function (type = "text", color = "") {
            var selectHtml =
                '<select class="form-control form-select" style="' +
                color +
                '" oninput=" change_type(this); ">';
            table_type2.forEach(function (name) {
                var selected = "";
                if (name == type) {
                    selected = "selected";
                }
                selectHtml =
                    selectHtml +
                    "<option " +
                    selected +
                    ' value = "' +
                    name +
                    '">' +
                    name +
                    "</option>";
            });
            selectHtml = selectHtml + "</select>";
            return selectHtml;
        };

        this.change_alias = function (this2) {
            var index = $(this2).parent().index() - 1;
            table_array.header[index] = $(this2).val();
        };

        this.change_type = function (this2) {
            var index = $(this2).parent().index() - 1;
            table_array.type[index] = $(this2).val();
            render();
            message("Выбран тип данных " + $(this2).val() + ".", "true");
        };

        this.add_col = function () {
            table_array.header.push("");
            table_array.type.push("text");
            table_array.data.forEach(function (val, key) {
                table_array.data[key].push("");
            });
            render();
            message("Столбец добавлен!", "true");
        };

        this.add_row = function () {
            var newarr = [];
            table_array.header.forEach(function () {
                newarr.push("");
            });
            table_array.data.push(newarr);
            render();
            message("Строка добавлена!", "true");
        };
        //инпуты
        this.input_edit = function (col, val, row) {
            console.log(val); // FAR
            if (
                table_array.type[col] == "text" ||
                table_array.type[col] == "key"
            ) {
                return (
                    '<input class="form-control" oninput="text_change(this)" type="text" value="' +
                    val.replace('"', "&quot;") +
                    '">'
                );
            } else if (table_array.type[col] == "textarea") {
                return (
                    '<div class="d-flex"><textarea class="form-control" oninput="textarea_change(this)">' +
                    val +
                    '</textarea><span onclick="change_textarea(this);" class="mx-2" style="cursor: pointer;"><i class="fas fa-ellipsis-v"></i></span></div>'
                );
            } else if (table_array.type[col] == "array") {
                var newarr = val.data;
                if (typeof val.data != "object") {
                    newarr = {
                        header: [""],
                        type: ["text"],
                        data: [],
                    };
                    table_array.data[row][col] = newarr;
                } else {
                    newarr = val;
                }
                var html =
                    '<div class="d-flex justify-content-between"><span style="font-weight: 400;" class="ml-2">Строк в массиве: <span>' +
                    newarr.data.length +
                    "</span></span><span>";

                if (newarr.data.length == 0 || newarr.arrayType == "arrayDB") {
                    html =
                        html +
                        '<span style="cursor: pointer;  margin-right: 5px;" onclick="dbconnect(this);"> <i class="fas fa-dice-d6"></i></span>';
                }
                if (newarr.arrayType != "arrayDB") {
                    html =
                        html +
                        '<span onclick="change_array(this);" class="mr-2" style="cursor: pointer;"><i class="fas fa-ellipsis-v"></i></span>';
                }
                html = html + "</span></div>";
                return html;
            } else if (table_array.type[col] == "img") {
                if (val == "") {
                    val = "/assets/images/panel/noImg.jpg";
                }
                return (
                    '<div class="d-flex justify-content-center"><div style="position: relative;cursor: pointer; height: 55px; width: 55px;" data-type="select" onclick="select_img(this)"><div class="select_img" style="background-position: center; background-image: url(' +
                    val +
                    '); background-size: contain; background-repeat: no-repeat;     height: 100%; width: 100%;"></div><div style="background-color: white; background-position: center;" class="addPhotoHover" ></div></div></div>'
                );
            } else if (table_array.type[col] == "php") {
                return (
                    '<input class="form-control" oninput="php_change(this)" type="text" value="' +
                    val +
                    '"><div> </div>'
                );
            }
            return val;
        };

        this.all_menu = function (this2) {
            function time() {
                var set = setInterval(function () {
                    var test = 0;
                    timeMenuAnimation.forEach(function (val, key) {
                        if (val != 0) {
                            if (val == 1) {
                                $(".panel_table table tr:first-child>th")
                                    .eq(key)
                                    .find(".menu_table, .open_menu")
                                    .attr("data_toggle", "");
                            }
                            timeMenuAnimation[key] = timeMenuAnimation[key] - 1;
                            test++;
                        }
                    });
                    if (test == 0) {
                        clearInterval(set);
                        timeMenuAnimationStatus = false;
                    }
                }, 1000);
            }
            // id = $(this2).parents('th').index();
            $(this2)
                .parent("div")
                .css("width", $(this2).parent("div").innerWidth() + "px");
            // console.log($(this2).parents('th').index());
            if ($(this2).attr("data_toggle") == "check") {
                $(this2).next(".menu_table").add(this2).attr("data_toggle", "");
                $(this2).next(".menu_table").unbind();
            } else {
                $(this2)
                    .next(".menu_table")
                    .add(this2)
                    .attr("data_toggle", "check");
                $(this2)
                    .next(".menu_table")
                    .on("mouseleave", function () {
                        timeMenuAnimation[$(this).parents("th").index()] = 3;
                        if (!timeMenuAnimationStatus) {
                            timeMenuAnimationStatus = true;
                            time();
                        }
                    })
                    .on("mouseenter", function () {
                        timeMenuAnimation[$(this).parents("th").index()] = 0;
                    });
            }
        };
        //обработка инпутов
        this.name_col_change = function (this2) {
            var colindex = $(this2).parents("th").index() - 1;
            table_array.header[colindex] = $(this2).val();

            if (
                mask.header != undefined &&
                mask.header[colindex] == table_array.header[colindex]
            ) {
                $("table")
                    .find("tr")
                    .eq(0)
                    .children("th")
                    .eq(colindex + 1)
                    .find("input")
                    .css("background", "white");
            } else if (
                mask.header != undefined &&
                mask.header[colindex] != undefined
            ) {
                $("table")
                    .find("tr")
                    .eq(0)
                    .children("th")
                    .eq(colindex + 1)
                    .find("input")
                    .css("background", "#ffdede");
            }
        };
        //смена текста
        this.text_change = function (this2) {
            var colindex = $(this2).parent().index() - 1;
            var rowindex = $(this2).parents("tr").index() - 2;
            table_array.data[rowindex][colindex] = $(this2).val();
        };
        //смена большого текста
        this.textarea_change = function (this2) {
            //проверка на перенос строки
            var $val = $(this2).val();
            var colindex = $(this2).parents("th").index() - 1;
            var rowindex = $(this2).parents("tr").index() - 2;
            table_array.data[rowindex][colindex] = $(this2).val();
        };
        //открытие меню для тины
        this.change_textarea = function (this2) {
            var colindex = $(this2).parents("th").index() - 1;
            var rowindex = $(this2).parents("tr").index() - 2;
            $(selectHtmlClass).css("display", "none");
            $(".tina").css("display", "block");
            console.log($(this2).prev().val());
            $("iframe#tina_panel_ifr")
                .contents()
                .find("body")
                .html($(this2).prev().val());
            $(".tina").attr("data-col", colindex);
            $(".tina").attr("data-row", rowindex);

            // Скрытие и показ модального окна при открытии "Исходный код" в Тине
            const tinaNode = document.querySelector(".tina");
            const srcCodeOpenBtnNode = tinaNode.querySelector(
                'button[aria-label="Исходный код"]'
            );

            srcCodeOpenBtnNode.addEventListener("click", () => {
                const modalNode = document.querySelector(".modal-pgcreator");

                modalNode.style.display = "none";

                setTimeout(() => {
                    const srcCodeControlBtnsNodes =
                        document.querySelectorAll(".tox-button");

                    srcCodeControlBtnsNodes.forEach((srcCodeControlBtn) => {
                        srcCodeControlBtn.addEventListener("click", () => {
                            modalNode.style.display = "block";
                        });
                    });
                }, 0);
            });
        };

        this.save_texarea = function () {
            var colindex = $(".tina").attr("data-col");
            var rowindex = $(".tina").attr("data-row");
            table_array.data[rowindex][colindex] = $("iframe#tina_panel_ifr")
                .contents()
                .find("body")
                .html();
            $(".tina").css("display", "none");
            $(selectHtmlClass).css("display", "block");
            render();
        };
        //смена картинки
        this.select_img = function (this2) {
            if ($(this2).attr("data-type") == "select") {
                $(this2).after(
                    '<input type="file" style="display: none;" data-type="file" oninput="select_img(this)">'
                );
                $(this2).next("input").trigger("click");
            } else if ($(this2).attr("data-type") == "file") {
                var file = $(this2).prop("files");
                file = file[0];
                //подготовка
                if (
                    file["type"] == "image/jpeg" ||
                    file["type"] == "image/png" ||
                    file["type"] == "image/svg+xml"
                ) {
                    var form_data = new FormData();
                    form_data.append("img", file);
                    var colindex = $(this2).parents("th").index() - 1;
                    var rowindex = $(this2).parents("tr").index() - 2;
                    $(this2).parent().children("input").remove();
                    axios
                        .post("/api/panel_photo", form_data)
                        .then(({ data }) => {
                            if (data != "false") {
                                table_array.data[rowindex][colindex] = data;
                                render();
                            } else {
                                message("Ошибка загрузки фотографии", "false");
                            }
                        });
                }
            }
        };
        //изменение массива
        this.change_array = function (this2) {
            var colindex = $(this2).parents("th").index() - 1;
            var rowindex = $(this2).parents("tr").index() - 2;
            var name = "";
            select_.push({
                row: rowindex,
                col: colindex,
            });
            var $eval = "";
            select_.forEach(function (val) {
                $eval = $eval + ".data[" + val.row + "][" + val.col + "]";
                if (table_array.header[val.col] != "") {
                    var col = table_array.header[val.col];
                } else {
                    col = val.col;
                }
                name = name + "/" + val.row + " : " + col + " ";
            });
            name = name + "   вложенность - " + select_.length;
            eval("table_array = all_table_array" + $eval);
            if (selectHtmlClass == ".panel_table") {
                $(selectHtmlClass).html(
                    '<div class="window_table_array" style="left: 0px; background: white; height: 100%; width: 100%; top: 0px; padding: 15px;"><div class="infoArray">' +
                        name +
                        '</div><div class="window_table_">' +
                        visited_table() +
                        '</div><div onclick="save_window_array()" class="btn btn-outline-primary btn-sm ">Назад</div></div>'
                );
                //приминям стили
                selectHtmlClass = ".window_table_";
            } else {
                render();
                $(".infoArray").html(name);
            }
        };
        //изменение php

        this.php_change = function (this2) {
            //добавляем в очередь
            console.log($(this2).parents("th").index() + 1);
            turnAjax.data.push(
                "$.post('/infusions/panel_editor/admin/ajax/ajax.selectTable.php',{\
                            'operation':'selectPhp','evalPhp':'" +
                    $(this2).val() +
                    "'},function(data){\
                                turnAjax.send = false;\
                                $('.panel_table table tr:nth-child(" +
                    ($(this2).parents("tr").index() + 1) +
                    ")>th:nth-child(" +
                    ($(this2).parents("th").index() + 1) +
                    ")>div').html(data)\
                                })"
            );
            turnAjaxRequest();
        };

        //фнкция очереде запросов
        this.turnAjaxRequest = function () {
            //смотрим флаг если
            // console.log('пытаемся запустить ф-цию');
            if (turnAjax.status) {
                // console.log('до этого ф-ция не была запущена');
                let timerId = setInterval(function () {
                    // console.log('setInterval');
                    turnAjax.status = false;
                    //смотрим есть ли сейчас запрос
                    if (!turnAjax.send && turnAjax.data.length >= 1) {
                        //и количество элементов в массиве не равно 0
                        // console.log('делаем запрос');
                        turnAjax.send = true;
                        eval(turnAjax.data[turnAjax.data.length - 1]);
                        turnAjax.data = [];
                    } else if (turnAjax.data.length == 0) {
                        // console.log('выключаем функцию');
                        turnAjax.status = true;
                        clearInterval(timerId);
                    }
                }, 250);
            }
        };

        this.dbconnect = function (this2) {
            //если происходит смена типа то выдаем предупреждение об удалении старых данных
            if (this2 != "true") {
                var colindex = $(this2).parents("th").index() - 1;
                var rowindex = $(this2).parents("tr").index() - 2;
                if (
                    (table_array.data[rowindex][colindex].arrayType ==
                        undefined &&
                        table_array.data[rowindex][colindex].data.length > 0) ||
                    (table_array.data[rowindex][colindex].arrayType !=
                        undefined &&
                        table_array.data[rowindex][colindex].arrayType ==
                            "array" &&
                        table_array.data[rowindex][colindex].length > 0)
                ) {
                    if (
                        confirm(
                            "Смена типа массива приведет к удалению всех его данных!!!"
                        )
                    ) {
                        table_array.data[rowindex][colindex].data = [];
                        message("Тип массива изменен!", "true");
                    } else {
                        return;
                    }
                }
                select_.push({
                    row: rowindex,
                    col: colindex,
                });
                var $eval = "";
                select_.forEach(function (val) {
                    $eval = $eval + ".data[" + val.row + "][" + val.col + "]";
                });
                eval("table_array = all_table_array" + $eval);
            } else {
                if (
                    (table_array.arrayType == undefined &&
                        table_array.data.length > 0) ||
                    (table_array.arrayType != undefined &&
                        table_array.arrayType == "array" &&
                        table_array.length > 0)
                ) {
                    if (
                        confirm(
                            "Смена типа массива приведет к удалению всех его данных!!!"
                        )
                    ) {
                        table_array.data = [];
                        message("Тип массива изменен!", "true");
                    } else {
                        return;
                    }
                }
            }
            if (selectHtmlClass == ".panel_table") {
                $(selectHtmlClass).html(
                    '<div class="window_table_array" style="left: 0px; background: white; height: 100%; width: 100%; top: 0px; padding: 15px;"><div class="infoArray  text-right">' +
                        name +
                        '</div><div class="window_table_">' +
                        visited_table() +
                        '</div><div onclick="save_window_array()" class="btn btn-outline-primary btn-sm ">Назад</div></div>'
                );
                //приминям стили
                selectHtmlClass = ".window_table_";
            }
            //проверяем есть ли данные
            if (table_array.arrayType == undefined) {
                table_array.arrayType = "arrayDB";
                table_array.table = "none";
                table_array.where = "";
                table_array.order = "";
                table_array.limit = "10";
                table_array.query = "";
                table_array.dbSet = "default";
                table_array.allCol = ["none"];
                table_array.col = [];
                table_array.type = [];
                table_array.header.forEach(function () {
                    table_array.col.push("none");
                    table_array.type.push("text");
                });
            } else {
                table_array.arrayType = "arrayDB";
                table_array.type = [];
                table_array.header.forEach(function (val, key) {
                    if (table_array.col[key] == undefined) {
                        table_array.col.push("none");
                    }
                    table_array.type.push("text");
                });
            }
            var active1 = "";
            var active2 = "";
            var html = '<div class="row mt-3"><div class="col-2">';
            html = html + "<div><label>Тип массива</label></div>";
            html =
                html +
                '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-outline-primary btn-sm active clRS" id="render"> <input type="radio" name="options" id="option1" autocomplete="off" checked=""> DataBase </label> <label class="btn btn-outline-primary btn-sm  clRS" id="static"> <input type="radio" onchange="change_arrayDB_type(\'array\');" name="options" id="option2" autocomplete="off"> Array </label> </div>';
            html = html + '</div><div class="col-2">';
            html = html + "<div><label>Тип обращения к базе</label></div>";
            if (table_array.dbSet == "default") {
                active1 = "active";
            } else {
                active2 = "active";
            }
            html =
                html +
                '<div class="btn-group btn-group-toggle" data-toggle="buttons"> <label class="btn btn-outline-primary btn-sm ' +
                active1 +
                ' clRS" id="render"> <input type="radio"  onchange="change_arrayDB_connectType(\'default\');"  name="options" id="option1" autocomplete="off" checked="">Выбор</label> <label class="btn btn-outline-primary btn-sm ' +
                active2 +
                ' clRS" id="static"> <input type="radio" onchange="change_arrayDB_connectType(\'query\');" name="options" id="option2" autocomplete="off">Запрос</label> </div>';
            html =
                html +
                '</div></div><div class="row"><div class="table_dbSet  mt-2 mb-5 col-8 row">';
            if (table_array.dbSet == "default") {
                html =
                    html +
                    '<div class="col-3"><label>Имя таблицы</label><div class = "select_table">' +
                    db_select_table() +
                    "</div></div>";
                html =
                    html +
                    '<div class="col-3"><label>WHERE</label><input type="text" class = "form-control" oninput="change_arrayDB_where(this);"onchange="change_arrayDB_where(this, true);"  value="' +
                    table_array.where +
                    '"></div>';
                html =
                    html +
                    '<div class="col-3"><label>ORDER</label><input type="text" class = "form-control" oninput="change_arrayDB_order(this);" onchange = "change_arrayDB_order(this, true);" value = "' +
                    table_array.order +
                    '"></div>';
                html =
                    html +
                    '<div class="col-3"><label>LIMIT</label><input type="text" class = "form-control" oninput="change_arrayDB_limit(this);" onchange = "change_arrayDB_limit(this, true);" value = "' +
                    table_array.limit +
                    '"></div>';
            } else if (table_array.dbSet == "query") {
                html =
                    html +
                    '<div class="col-12"><label>WHERE</label><input type="text" class = "form-control" oninput="change_arrayDB_query(this);"onchange="change_arrayDB_query(this, true);"  value="' +
                    table_array.query +
                    '"></div>';
            }
            html =
                html +
                '</div><div class="col-2  mt-2 mb-5 d-flex align-items-end"><button onclick="update_arrayDB();" class="btn btn-success">Запрос</button></div>';
            html = html + "</div>";
            $(selectHtmlClass).html(html);
            html = '<div class="table_db">' + table_db(this2) + "</div>";
            $(selectHtmlClass).append(html);
            $("#select-table-db").css("background", arrayTableDbFlag);
        };
        //Список доступных таблиц
        this.db_select_table = function () {
            var html = "";
            $.ajax({
                type: "POST",
                url: $("#select_table").val(),
                data: {
                    operation: "selectTable",
                },
                async: false,
                success: function (data2) {
                    var select = JSON.parse(data2);
                    select.push(["none", "2"]);
                    html =
                        '<select class="form-control form-select" id="select-table-db" oninput="change_table_DB(this);">';
                    select.forEach(function (val) {
                        var color = "white";
                        if (val[1] == 1) {
                            color = "#ccead3";
                            var arrayTableDbFlag = "#ccead3";
                        }
                        if (val[0] == table_array.table) {
                            html =
                                html +
                                '<option style="background: ' +
                                color +
                                ';" selected value=' +
                                val[0] +
                                ">" +
                                val[0] +
                                "</option>";
                        } else {
                            html =
                                html +
                                '<option style="background: ' +
                                color +
                                ';" value=' +
                                val[0] +
                                ">" +
                                val[0] +
                                "</option>";
                        }
                    });
                    html = html + "</select>";
                },
            });
            return html;
        };

        this.IsJsonString = function (str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        };

        //отображение таблицы
        this.table_db = function () {
            if (
                (table_array.allCol.length <= 1 &&
                    table_array.table != "none") ||
                table_array.dbSet == "query"
            ) {
                $.ajax({
                    type: "POST",
                    url: $("#select_table").val(),
                    data: {
                        operation: "selectCol",
                        table: table_array.table,
                        type: table_array.dbSet,
                        query: table_array.query,
                    },
                    async: false,
                    success: function (data2) {
                        if (IsJsonString(data2)) {
                            table_array.allCol = ["none"];
                            data2 = JSON.parse(data2);
                            if (data2.from == "2") {
                                $(".table_dbSet")
                                    .find("input")
                                    .css("background", "#ccead3");
                            } else {
                                $(".table_dbSet")
                                    .find("input")
                                    .css("background", "white");
                            }
                            data2.col.forEach(function (val) {
                                table_array.allCol.push(val);
                            });
                        } else {
                            $(".table_dbSet")
                                .find("input")
                                .css("background", "#ffdbdb");
                        }
                    },
                });
            }

            //заполняем массив дата если он пустой
            if (
                (table_array.data.length < 1 && table_array.table != "none") ||
                table_array.dbSet == "query"
            ) {
                $.ajax({
                    type: "POST",
                    url: $("#select_table").val(),
                    data: {
                        operation: "selectRow",
                        type: table_array.dbSet,
                        table: table_array.table,
                        ORDER: table_array.order,
                        WHERE: table_array.where,
                        LIMIT: table_array.limit,
                        query: table_array.query,
                        col: table_array.col,
                    },
                    async: false,
                    success: function (data2) {
                        if (IsJsonString(data2)) {
                            table_array.data = JSON.parse(data2);
                        } else {
                            message("Неверный ответ от сервера", "false");
                        }
                    },
                });
            }
            var html =
                '<div class="table-responsive"><table class="table" style="position: relative;"><tbody><tr><th style="width: 150px;">Alias</th>';
            table_array.header.forEach(function (item, key) {
                html =
                    html +
                    '<th><div style="display: flex; min-width: 150px;"><input oninput="name_col_change(this);" class="form-control" type = "text" value="' +
                    item +
                    '" placeholder="Название столбца" oninput="change_alias(this);"><button type="button" class="remove" onclick="delete_arrayDB_col(this);"></button></div></th>';
            });
            html =
                html +
                '<th rowspan="' +
                (table_array.data.length + 3) +
                '" style="width: 16px; background: #28a745; color: white; text-align: center; vertical-align: middle; cursor: pointer; background-image: url(\'/infusions/panel_editor/images/simple-dashed.png\'); padding: 0px;" onclick="add_arrayDB_col(this);" >+</th>';
            html = html + "</tr><tr><th>Столбец db</th>";
            table_array.col.forEach(function (item2, key) {
                html = html + "<th>" + table_db_select_col(item2) + "</th>";
            });
            html = html + "</tr>";
            table_array.data.forEach(function (data, key2) {
                html = html + "<tr><th></th>";
                data.forEach(function (datael, key) {
                    html =
                        html +
                        '<th><input type="text" class="form-control" value="' +
                        datael +
                        '" disabled></th>';
                });
                html = html + "</tr>";
            });
            html = html + "</tbody></table></div>";
            return html;
        };

        //отображение столбцов таблицы
        this.table_db_select_col = function (data) {
            var html =
                '<select class="form-control form-select" oninput="change_arrayDB_col(this);">';
            table_array.allCol.forEach(function (val, key) {
                if (data == val) {
                    html =
                        html +
                        '<option selected value="' +
                        val +
                        '">' +
                        val +
                        "</option>";
                } else {
                    html =
                        html +
                        '<option value="' +
                        val +
                        '">' +
                        val +
                        "</option>";
                }
            });
            html = html + "</select>";
            return html;
        };

        //инпуты

        //изменение самой таблицы
        this.change_table_DB = function (this2) {
            $(this2).css(
                "background-color",
                $(this2)
                    .children('[value="' + $(this2).val() + '"]')
                    .css("background-color")
            );
            table_array.data = [];
            table_array.col = [];
            table_array.allCol = ["none"];
            table_array.header.forEach(function () {
                table_array.col.push("none");
            });
            table_array.table = $(this2).val();
            $(".table_db").html(table_db());
        };
        //удаление столбца
        this.delete_arrayDB_col = function (this2) {
            //удаляем данные из  table_array.header.splice(colIndex,1);
            var colIndex = $(this2).parents("th").index() - 1;
            table_array.type.splice(colIndex, 1);
            table_array.col.splice(colIndex, 1);
            table_array.header.splice(colIndex, 1);
            table_array.data = [];
            $(".table_db").html(table_db());
        };
        //добавление столбца
        this.add_arrayDB_col = function (this2) {
            table_array.type.push("text");
            table_array.col.push("none");
            table_array.header.push("");
            table_array.data = [];
            $(".table_db").html(table_db());
        };
        //изменение типа массива
        this.change_arrayDB_type = function (this2) {
            //удаляем все строки относящиеся к массиву бд
            if (this2 == "array") {
                table_array.arrayType = "array";
                render();
                message("Тип массива изменен!", "true");
            } else if (this2 == "DataBase") {
                dbconnect("true");
                message("Тип массива изменен!", "true");
            }
        };
        //изменение типа запроса
        this.change_arrayDB_connectType = function (this2) {
            table_array.dbSet = this2;
            table_array.data = [];
            table_array.col = [];
            table_array.allCol = ["none"];
            table_array.header.forEach(function () {
                table_array.col.push("none");
            });
            $(".table_db").html(table_db());
            var htmldb = "";
            if (table_array.dbSet == "default") {
                htmldb =
                    htmldb +
                    '<div class="col-3"><label>Имя таблицы</label><div class = "select_table">' +
                    db_select_table() +
                    "</div></div>";
                htmldb =
                    htmldb +
                    '<div class="col-3"><label>WHERE</label><input type="text" class = "form-control" oninput="change_arrayDB_where(this);"onchange="change_arrayDB_where(this, true);"  value="' +
                    table_array.where +
                    '"></div>';
                htmldb =
                    htmldb +
                    '<div class="col-3"><label>ORDER</label><input type="text" class = "form-control" oninput="change_arrayDB_order(this);" onchange = "change_arrayDB_order(this, true);" value = "' +
                    table_array.order +
                    '"></div>';
                htmldb =
                    htmldb +
                    '<div class="col-3"><label>LIMIT</label><input type="text" class = "form-control" oninput="change_arrayDB_limit(this);" onchange = "change_arrayDB_limit(this, true);" value = "' +
                    table_array.limit +
                    '"></div>';
            } else if (table_array.dbSet == "query") {
                htmldb =
                    htmldb +
                    '<div class="col-12"><label>QUERY</label><input type="text" class = "form-control" oninput="change_arrayDB_query(this);"onchange="change_arrayDB_query(this, true);"  value="' +
                    table_array.query +
                    '"></div>';
            }
            $(".panel_table").find(".table_dbSet").html(htmldb);
            $("#select-table-db").css("background", arrayTableDbFlag);
        };
        //изменение where
        this.change_arrayDB_where = function (this2, type = false) {
            table_array.where = $(this2).val();
            if (type) {
                table_array.data = [];
                $(".table_db").html(table_db());
            }
        };
        //изменение order
        this.change_arrayDB_order = function (this2, type = false) {
            table_array.order = $(this2).val();
            if (type) {
                table_array.data = [];
                $(".table_db").html(table_db());
            }
        };
        //изменение count
        this.change_arrayDB_limit = function (this2, type = false) {
            table_array.limit = $(this2).val();
            if (type) {
                table_array.data = [];
                $(".table_db").html(table_db());
            }
        };

        this.change_arrayDB_query = function (this2, type = false) {
            table_array.query = $(this2).val();
            if (type) {
                table_array.data = [];
                $(".table_db").html(table_db());
            }
        };

        //обновление таблицы
        this.update_arrayDB = function (this2) {
            table_array.data = [];
            $(".table_db").html(table_db());
        };
        //изменение столбца таблицы
        this.change_arrayDB_col = function (this2) {
            var colindex = $(this2).parents("th").index() - 1;
            table_array.col[colindex] = $(this2).val();
            table_array.data = [];
            $(".table_db").html(table_db());
        };

        this.save_window_array = function () {
            select_.pop();
            var $eval = "";
            select_.forEach(function (val, key) {
                $eval = $eval + ".data[" + val.row + "][" + val.col + "]";
            });
            eval("table_array = all_table_array" + $eval);
            if (select_.length == 0) {
                selectHtmlClass = ".panel_table";
            }
            render();
        };

        this.left_col = function (this2) {
            //вытаскиваем индекс если он 0 то движение не происходит
            var index = $(this2).parents("th").index();
            if (index > 1) {
                var title_col = ["header", "type"];
                for (let key in table_array) {
                    if (title_col.indexOf(key) != -1) {
                        table_array[key].splice(
                            index - 2,
                            2,
                            table_array[key][index - 1],
                            table_array[key][index - 2]
                        );
                    } else if (key == "data") {
                        table_array[key].forEach(function (val2, key2) {
                            table_array[key][key2].splice(
                                index - 2,
                                2,
                                table_array[key][key2][index - 1],
                                table_array[key][key2][index - 2]
                            );
                        });
                    }
                }
                timeMenuAnimation.forEach(function (val, key) {
                    timeMenuAnimation[key] = 0;
                    $(".panel_table table tr:first-child>th")
                        .eq(key)
                        .find(".menu_table, .open_menu")
                        .attr("data_toggle", "");
                    $(".menu_table").unbind("mouseleave").unbind("mouseenter");
                });
                $(".panel_table table tr>th:nth-child(" + (index + 1) + ")")
                    .css({
                        position: "relative",
                        background: "white",
                    })
                    .animate(
                        {
                            right: $(this2).parents("th").innerWidth() + "px",
                        },
                        1000
                    );
                $(".panel_table table tr>th:nth-child(" + index + ")")
                    .css({
                        position: "relative",
                        background: "white",
                    })
                    .animate(
                        {
                            left: $(this2).parents("th").innerWidth() + "px",
                        },
                        1000,
                        function () {
                            render();
                        }
                    );
            }
        };

        this.right_col = function (this2) {
            var index = $(this2).parents("th").index();
            if (index < $(".panel_table table tr:first-child th").length - 2) {
                var title_col = ["header", "type"];
                for (var key in table_array) {
                    if (title_col.indexOf(key) != -1) {
                        table_array[key].splice(
                            index - 1,
                            2,
                            table_array[key][index],
                            table_array[key][index - 1]
                        );
                    } else if (key == "data") {
                        table_array[key].forEach(function (val2, key2) {
                            table_array[key][key2].splice(
                                index - 1,
                                2,
                                table_array[key][key2][index],
                                table_array[key][key2][index - 1]
                            );
                        });
                    }
                }
                timeMenuAnimation.forEach(function (val, key) {
                    timeMenuAnimation[key] = 0;
                    $(".panel_table table tr:first-child>th")
                        .eq(key)
                        .find(".menu_table, .open_menu")
                        .attr("data_toggle", "");
                    $(".menu_table").unbind("mouseleave").unbind("mouseenter");
                });
                $(".panel_table table tr>th:nth-child(" + (index + 1) + ")")
                    .css({
                        position: "relative",
                        background: "white",
                        "z-index": "5",
                    })
                    .animate(
                        {
                            left: $(this2).parents("th").innerWidth() + "px",
                        },
                        1000
                    );
                $(".panel_table table tr>th:nth-child(" + (index + 2) + ")")
                    .css({
                        position: "relative",
                        background: "white",
                        "z-index": "1",
                    })
                    .animate(
                        {
                            right: $(this2).parents("th").innerWidth() + "px",
                        },
                        1000,
                        function () {
                            render();
                        }
                    );
            }
        };

        this.key_col = function (this2) {
            var index = $(this2).parents("th").index() - 1;
            var key = table_array["type"].indexOf("key");
            if (key != -1) {
                if (key == index) {
                    table_array.type[index] = "text";
                    message("Столбец с ключами отключен!", "true");
                    $(
                        ".panel_table table tr:first-child>th:nth-child(" +
                            (index + 2) +
                            ") input"
                    ).animate(
                        {
                            opacity: "1",
                        },
                        250
                    );
                    $(
                        ".panel_table table tr:nth-child(2)>th:nth-child(" +
                            (index + 2) +
                            ")"
                    )
                        .css({
                            padding: "0",
                        })
                        .html("<div></div>")
                        .children("div")
                        .css({
                            opacity: "0",
                            "border-top": "solid 1px #dee2e6",
                            padding: "12px",
                        })
                        .html(table_type())
                        .animate(
                            {
                                opacity: "1",
                            },
                            250,
                            function () {
                                render();
                            }
                        );
                } else {
                    message("Ключ уже назначен", "false");
                }
            } else {
                if (table_array["type"][index] == "text") {
                    table_array["type"][index] = "key";
                    message("Столбец с ключами задан!", "true");
                    $(
                        ".panel_table table tr:first-child>th:nth-child(" +
                            (index + 2) +
                            ") input"
                    ).animate(
                        {
                            opacity: "0",
                        },
                        250
                    );
                    $(
                        ".panel_table table tr:nth-child(2)>th:nth-child(" +
                            (index + 2) +
                            ")"
                    )
                        .css({
                            border: "none",
                            padding: "0px",
                        })
                        .html(
                            "<div>" +
                                $(
                                    ".panel_table table tr:nth-child(2)>th:nth-child(" +
                                        (index + 2) +
                                        ")"
                                ).html() +
                                "</div>"
                        )
                        .children("div")
                        .css({
                            "border-top": "solid 1px #dee2e6",
                            height: "100%",
                            width: "100%",
                            padding: "12px",
                        })
                        .animate(
                            {
                                opacity: "0",
                            },
                            150,
                            function () {
                                $(this)
                                    .parents("th")
                                    .css("padding", "12px")
                                    .html('<i class="fas fa-key"></i>')
                                    .children("i")
                                    .css({
                                        width: "100%",
                                        color: "gold",
                                        "text-align": "center",
                                        "text-shadow": "0px 0px 2px black",
                                        "font-size": "24px",
                                        position: "relative",
                                        top: "-20px",
                                        opacity: "0",
                                    })
                                    .animate(
                                        {
                                            opacity: "1",
                                        },
                                        150,
                                        function () {
                                            render();
                                        }
                                    );
                            }
                        );
                }
            }
        };

        this.delete_col = function (this2) {
            if (
                confirm(
                    "Удаление столбца удалит данные во всех ячейках этого столбца"
                )
            ) {
                var colIndex = $(this2).parents("th").index() - 1;
                table_array.header.splice(colIndex, 1);
                table_array.type.splice(colIndex, 1);
                table_array.data.forEach(function (val, key) {
                    table_array.data[key].splice(colIndex, 1);
                });
                render();
            }
        };

        this.delete_row = function (this2) {
            var rowindex = $(this2).parents("tr").index() - 2;
            table_array.data.splice(rowindex, 1);
            render();
        };

        this.select_mask = function (this2) {
            //данный массив будет слушить маской для всех последующих
            var rowindex = $(this2).parents("tr").index() - 2;
            if (table_array.mask === undefined) {
                $(this2).children("i").toggleClass("far fas");
                table_array.mask = rowindex;
            } else if (rowindex == table_array.mask) {
                table_array.mask = undefined;
                $(this2).children("i").toggleClass("far fas");
            }
        };

        this.transfer_row = function (this2) {
            var array = [];
            var full = $(".panel_table tbody");
            var this2 = $(this2).parents("tr");
            var element_position = {
                current: $(this2).position().top,
                min: $(full).children().eq(2).position().top,
                max: $(full).children().last().prev().position().top,
            };
            var cursor_position = {
                current: event.clientY,
                min: element_position.min - element_position.current,
                max: element_position.max - element_position.current,
            };
            var new_element = $(full)
                .prepend(
                    '<tr class="newElement__" style="background: white;">' +
                        $(this2).html() +
                        "</tr>"
                )
                .children("tr")
                .first();

            $(full)
                .children()
                .each(function () {
                    array.push($(this).position().top);
                });
            element_position.index = $(this2).index();
            element_position.array = array;
            element_position.offset = 0;
            element_position.prevOffset = 0;
            element_position.height = $(this2).height();
            element_position.indexMax = $(full)
                .children()
                .last()
                .prev()
                .index();

            $(new_element)
                .css({
                    position: "absolute",
                    top: element_position.current,
                })
                .children("th")
                .each(function (indx) {
                    $(this).css(
                        "width",
                        $(this2).children("th").eq(indx).css("width")
                    );
                    $(this)
                        .find("input")
                        .val($(this2).children().eq(indx).find("input").val());
                });
            $(new_element).addClass("newElement");
            setTimeout(function () {
                $(new_element).removeClass("newElement__");
            }, 200);
            $(this2).remove();
            $(full)
                .children()
                .eq(element_position.index)
                .before(
                    '<tr  class="animate" style="height: ' +
                        element_position.height +
                        'px"></tr>'
                );
            $("body").mousemove(function (event) {
                var r = event.clientY - cursor_position.current;
                if (r <= cursor_position.min) {
                    $(new_element).css("top", element_position.min);
                    element_position.offset = 3 - element_position.index;
                } else if (r >= cursor_position.max) {
                    $(new_element).css("top", element_position.max);
                    element_position.offset =
                        element_position.indexMax - element_position.index;
                } else {
                    $(new_element).css("top", element_position.current + r);
                    if (
                        element_position.current + r <
                        element_position.array[
                            element_position.index + element_position.offset - 2
                        ]
                    ) {
                        element_position.offset = element_position.offset - 1;
                    } else if (
                        element_position.current + r >
                        element_position.array[
                            element_position.index + element_position.offset
                        ]
                    ) {
                        element_position.offset = element_position.offset + 1;
                    }
                }
                if (element_position.prevOffset != element_position.offset) {
                    element_position.prevOffset = element_position.offset;
                    $(this2).stop(true);
                    $(this2).animate(
                        {
                            height: "0px",
                        },
                        200
                    );
                    $(".animate").stop(true);
                    $(".animate").animate(
                        {
                            height: "0px",
                        },
                        200,
                        function () {
                            $(this).remove();
                            $("tbody>tr")
                                .eq(1)
                                .children("th")
                                .last()
                                .attr("rowspan", $(full).children().length);
                        }
                    );
                    $(".animate").removeClass(".animate");
                    $(full)
                        .children()
                        .has("th")
                        .eq(element_position.index + element_position.offset)
                        .before('<tr class="animate"></tr>');
                    $("tbody>tr")
                        .eq(1)
                        .children("th")
                        .last()
                        .attr("rowspan", $(full).children().length);
                    $(full).children(".animate").animate(
                        {
                            height: element_position.height,
                        },
                        200
                    );
                }
            });
            $("body").mouseup(function () {
                $("body").unbind("mousemove");
                $("body").unbind("mouseup");

                $(new_element).animate(
                    {
                        top: $(full)
                            .children()
                            .eq(
                                element_position.index + element_position.offset
                            )
                            .position().top,
                    },
                    100,
                    function () {
                        $(new_element).addClass("newElement__ newElement_");
                        $(new_element).removeClass(".newElement");
                        var obj = table_array.data[element_position.index - 3];
                        //поправляем маску
                        if (
                            table_array.mask != undefined &&
                            element_position.index - 3 == table_array.mask
                        ) {
                            table_array.mask =
                                table_array.mask + element_position.offset;
                        }
                        table_array.data.splice(element_position.index - 3, 1);
                        table_array.data.splice(
                            element_position.index -
                                3 +
                                element_position.offset,
                            0,
                            obj
                        );
                        setTimeout(function () {
                            render();
                        }, 200);
                    }
                );
            });
        };

        this.send_all = function (type) {
            var data = {
                title: $("#title").val(),
                discription: $("#discription").val(),
                alias: $("#alias").val(),
                type: $(".clRS").filter(".active").attr("id"),
                data: JSON.stringify(renamenewline(all_table_array)),
                panel_id: id,
            };

            $.post(
                "/infusions/panel_editor/admin/ajax/ajax.savePanel.php",
                data,
                function (data2) {
                    //возможные ошибки
                    //такая панель уже существует SELECT product.name , product.img ,category.seourl as 'url1' , product.seourl FROM `touch5vn4q_catalog_productions` product LEFT JOIN `touch5vn4q_catalog_categories` category ON product.parent = category.id WHERE category.parent = 3  LIMIT 8
                    console.log(data2);
                    if (data2 == "true") {
                        if (type) {
                            window.location.href = $(".redir").attr("href");
                        } else {
                            message("Успешно сохранено", "true");
                        }
                    } else if (data2 == "false") {
                        $("#alias").css("box-shadow", "0px 0px 2px 1px red");
                        message(
                            "Такая панель уже существует! Измените alias панели",
                            "false"
                        );
                    } else {
                    }
                }
            );
        };

        $("body").keydown(function (eventObject) {
            //нажатие вверх
            var $rowindex =
                $(".panel_table input:focus").parents("tr").index() - 2;
            var $colindex = $(".panel_table input:focus").parents("th").index();
            if (eventObject.which == 38 && $rowindex > 0) {
                $(".panel_table")
                    .find("tr")
                    .eq($rowindex + 1)
                    .find("th")
                    .eq($colindex)
                    .find("input")
                    .focus();
            }
            if (eventObject.which == 40) {
                $(".panel_table")
                    .find("tr")
                    .eq($rowindex + 3)
                    .find("th")
                    .eq($colindex)
                    .find("input")
                    .focus();
            }
            if (eventObject.which == 13) {
                if (table_array.data.length == $rowindex + 1) {
                    add_row();
                    $(".panel_table")
                        .find("tr")
                        .eq($rowindex + 3)
                        .find("th")
                        .find("input")
                        .first()
                        .focus();
                }
            }
        });

        this.message = function (mes, bg = "white") {
            if (bg == "false") {
                bg = "#ea3f3061";
            } else if (bg == "true") {
                bg = "#4285f466";
            }
            $("#messages").prepend(
                '<div class="message"><div style="background-color:' +
                    bg +
                    ';">' +
                    mes +
                    "!</div></div>"
            );
            var this2 = $("#messages>.message:nth-child(1)");
            $(this2)
                .animate(
                    {
                        height: "50px",
                    },
                    100
                )
                .animate(
                    {
                        width: "300px",
                        opacity: "1",
                    },
                    500,
                    function () {
                        setTimeout(function () {
                            $(this2)
                                .animate(
                                    {
                                        width: "0px",
                                        opacity: "0",
                                    },
                                    500
                                )
                                .animate(
                                    {
                                        height: "0px",
                                    },
                                    100,
                                    function () {
                                        $(this2).remove();
                                    }
                                );
                        }, 3000);
                    }
                );
        };

        this.renamenewline = function ($array, $flag = false) {
            $array["type"].forEach(function ($val, $key) {
                if ($val == "textarea") {
                    $array["data"].forEach(function ($val2, $key2) {
                        if ($flag) {
                            if (/\/\/n/.exec($val2[$key]) !== null) {
                                $array["data"][$key2][$key] = $val2[
                                    $key
                                ].replace(/\/\/n/g, "\n");
                            }
                        } else {
                            if (/[\r\n]/.exec($val2[$key]) !== null) {
                                $array["data"][$key2][$key] = $val2[
                                    $key
                                ].replace(/[\r\n]/g, "//n");
                            }
                        }
                    });
                } else if ($val == "array") {
                    $array["data"].forEach(function ($val2, $key2) {
                        $array["data"][$key2][$key] = renamenewline(
                            $val2[$key],
                            $flag
                        );
                    });
                }
            });
            return $array;
        };

        var all_table_array = renamenewline($ar, true);
        console.log($ar);
        var table_array = all_table_array;

        render();

        this.getAllTableArray = function () {
            return all_table_array;
        };
    }.bind(window);
}
