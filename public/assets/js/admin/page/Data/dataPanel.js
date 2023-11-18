import {tinymce_param} from "../tinymce.js";
import { ModalWindow } from "./modalWindow.js";
export class DataPanel {
    type = "panel";
    state = false;
    display = true;
    anchor = false;
    content = {
        work: "",
        safe: "",
        frame: "",
    };
    Editor;
    template = document.getElementById("datahub_panel");
    title;

    data = [];
    parent;
    node;
    line;
    dataHub;
    id;
    safe_id = false;
    safe_id_panel = false;
    safe_mod = false;
    empty = true;

    larvae = {};
    larvae_sel = {
        data: {},
        length: 0,
        clear: function (id) {
            if (Object.hasOwnProperty.call(this.data, id)) delete this.data[id];
        },
        clearAll: function () {
            for (const id in this.data) {
                if (Object.hasOwnProperty.call(this.data, id)) delete this.data[id];
            }
        },
    };

    shield = {
        warn: undefined,
    };

    constructor(data = null) {
        if (data) this.setOutData(data);

        this.id = makeid();
        this.getPanelNode();

    }

    destroy(all) {
        if (this.safe_id) {
            if (!(this.type in this.dataHub.removelist))
                this.dataHub.removelist[this.type] = [];
            this.dataHub.removelist[this.type].push(this.safe_id);
        }

        this.dataHub.removeInAxis.call(this);
        this.node.remove();
    }

    /******************************************************************* */

    setDataPanel(data){
        let context = this;
        data.forEach(el=>{
            context.data[el.id] = el.data
        })
    }

    getPanelsList(fn = {}) {
        const url = $('#panel_all_url').val();
        let data = new FormData();

        if (fn.hasOwnProperty("begin")) fn.begin();
        let context = this
        $.ajax({
            url: url,
            type: "POST",
            success(data){
                if(data.status){
                    try {
                        let list_panels = data.content;
                        console.log(list_panels)
                        context.setPanelList(list_panels);
                        context.setDataPanel(list_panels);
                        if (fn.hasOwnProperty("sucscess")) fn.sucscess();
                    } catch (_) {
                        console.log(_);
                        alert("ERR-163: Не удаётся загрузить список панелей!");
                    }
                }
            }
        })
    }

    getPanelData(id, fn = {}) {
        const url = $('#panel_all_url').val();
        let data = new FormData();
        data.append("id", id);

        if (fn.hasOwnProperty("begin")) fn.begin();

        console.log(data)
        this.larvae[id].content = this.data[id];

        if (fn.hasOwnProperty("sucscess")) fn.sucscess();
    }

    openSelectorByModal(modalWindow) {
        return new Promise((resolve, reject) => {
            modalWindow.close_modal = (modalWindow) => {
                reject();
            };
            modalWindow.saveToggle();

            let reload = modalWindow.addExtendButton({
                id: "reload",
                name: "Обновить",
                type: "info",
                loader: true,
                fn: this.getPanelsList.bind(this, {
                    begin: () => {
                        reload.node.disabled = true;
                    },
                    sucscess: () => {
                        reload.node.disabled = false;
                    },
                }),
            });

            let add;
            this.larvae_sel.data = new Proxy(this.larvae_sel.data, {
                deleteProperty: (target, prop) => {
                    this.larvae_sel.length--;
                    if (!this.larvae_sel.length) modalWindow.removeExtendButton("add");
                    delete target[prop];
                    return true;
                },
                set: (target, prop, val, receiver) => {
                    if (!this.larvae_sel.length)
                        add = modalWindow.addExtendButton({
                            id: "add",
                            name: "Добавить",
                            type: "primary",
                            loader: true,
                            fn: () => {
                                modalWindow.close_modal = (modalWindow) => {
                                    resolve(this.larvae_sel.data);
                                };
                                modalWindow.saveModal();
                            },
                        });

                    if (!this.larvae[prop].hasOwnProperty("content")) {
                        this.larvae[prop];

                        this.getPanelData(prop, {
                            begin: () => {
                                add.node.disabled = true;
                            },
                            sucscess: () => {
                                add.node.disabled = false;
                            },
                        });
                    }

                    this.larvae_sel.length++;
                    return Reflect.set(target, prop, val, receiver);
                },
            });

            this.getPanelsList({
                sucscess: () => {
                    console.log(213123123)
                    modalWindow.openModal();
                },
                failure: () => {
                    reject();
                },
            });
        });
    }

    openEditorByModal(modalWindow, content) {
        let data = JSON.parse(content);
        console.log(content)
        tinymce_param.target = modalWindow.modal_node.querySelector("#tina_panel");
        tinymce_param.init_instance_callback = (editor) => (this.Editor = editor);
        return new Promise((resolve, reject) => {
            let clear = modalWindow.addExtendButton({
                id: "clear",
                name: "Очистить",
                type: "info",
                fn: function () {
                    this.inject_panel.textContent = "";
                    panelEditor(JSON.parse(this.content.frame), this.safe_id_panel);
                }.bind(this),
            });

            /* let repair = modalWindow.addExtendButton({
                id: 'repair',
                name: 'Восстановить',
                type: 'info',
                fn: function () {
                    this.inject_panel.textContent = '';
                    panelEditor(JSON.parse(this.content.safe), this.safe_id);
                }.bind(this)
            }); */

            modalWindow.save_modal = (modalWindow) => {
                let all_table_array = getAllTableArray();
                let joke = JSON.stringify(renamenewline(all_table_array));

                this.content.work = joke;
            };

            modalWindow.close_modal = (modalWindow) => {
                this.Editor.destroy();
                resolve();
            };

            modalWindow.open_modal = (modalWindow) => {
                panelEditor(data, this.safe_id);
                tinymce.init(tinymce_param);
                modalWindow.addModalClass("pgcr__modal pgcr__modal_panel");
            };

            modalWindow.openModal();
        });
    }

    getNodeForModal() {
        let el = document.createElement("div");
        el.className = "inject-panel-list";
        el.style.minHeight = "500px";
        this.inject_panel_list = el;
        return el;
    }

    getNodeForModalByEdit() {
        let el_tina = d.createElement('div');
        el_tina.className = 'tina';
        el_tina.style.display = 'none';
        el_tina.innerHTML =
            `<div id="tina_panel"></div>
        <div onclick="save_texarea()" class="btn btn-outline-primary btn-sm my-3">Назад</div>`;


        let el_wr = d.createElement("div");
        el_wr.className = "panel_table--wr";
        el_wr.style.cssText =
            "display:flex;flex-direction:column;justify-content:center;min-height:500px";

        let el = d.createElement("div");
        el.className = "panel_table";

        el_wr.appendChild(el);
        el_wr.appendChild(el_tina);

        this.inject_panel = el;
        return el_wr;
    }

    setPanelList(raw) {
        let node = this.template.content
            .getElementById("list_panel")
            .children[0].cloneNode(true);
        let panels = node.querySelector("tbody");

        this.larvae = {};
        this.larvae_sel.clearAll();

        raw.map((panel) => {
            let item = this.template.content
                .getElementById("list_panel_item")
                .children[0].cloneNode(true)
                .querySelector("tr");
            this.larvae[panel.id] = {
                id: panel.id,
                safe: true,
            };
            let td = item.querySelectorAll("td");

            td[1].querySelector("span").innerText = panel.description;
            td[0].querySelector("span").innerText = this.larvae[
                panel.id
                ].title = panel.title;

            td[0].onclick = this.changeSelectedOnly.bind(
                this.larvae[panel.id],
                this.larvae_sel
            );
            item.querySelector(".btn-full").onclick = this.changeSelected.bind(
                this.larvae[panel.id],
                this.larvae_sel
            );
            item.querySelector(".btn-frame").onclick =
                this.changeSelectedFrame.bind(
                    this.larvae[panel.id],
                    this.larvae_sel
                );

            this.larvae[panel.id].node = panels.appendChild(item);
        });

        if (!panels.children.length)
            panels.appendChild(
                this.template.content
                    .getElementById("list_panel_item_empty")
                    .children[0].cloneNode(true)
                    .querySelector("tr")
            );

        this.inject_panel_list.textContent = "";
        this.inject_panel_list.appendChild(node);
        console.log(this.inject_panel_list)
    }

    changeSelected(storage) {
        console.log(storage)
        if (this.node.dataset.sel) {
            if (this.node.dataset.sel == "frame") {
                this.node.dataset.sel = "full";
                this.safe = true;
            } else {
                this.node.dataset.sel = "frame";
                this.safe = false;
            }
        } else {
            this.node.dataset.sel = "full";
            this.safe = true;

            storage.data[this.id] = this;
        }
    }

    changeSelectedOnly(storage) {
        if (this.node.dataset.sel) {
            this.node.removeAttribute("data-sel");
            storage.clear(this.id);
            this.safe = true;
        } else {
            this.node.dataset.sel = "full";
            this.safe = true;
            storage.data[this.id] = this;
        }
    }

    changeSelectedFrame(storage) {
        if (this.node.dataset.sel) {
            this.node.removeAttribute("data-sel");
            storage.clear(this.id);
            this.safe = true;
        } else {
            this.node.dataset.sel = "frame";
            this.safe = false;

            storage.data[this.id] = this;
        }
    }

    /******************************************************************* */

    getPanelNode() {
        let node = this.template.content
            .getElementById("list_group_item")
            .children[0].cloneNode(true);

        this.node = node;
        this.line = node.querySelector(".line");

        this.line.id = this.node.dataset.id = this.id;
        console.log(this)
        this.line.querySelector(".line__name").innerText = this.title;

        this.line.querySelector(".btn-show").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-hide").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-edit").onclick = this.editPanel.bind(this);
        this.line.querySelector(".btn-remove").onclick = this.destroy.bind(this);
        this.line.querySelector(".btn-anchor").onclick =
            this.changeAnchor.bind(this);

        this.shield.warn = this.line.querySelector(".shield-warn");

        this.changeEmpty();

        this.setDisplay();
        this.setAnchor();
        return node;
    }

    setPanelNode(node) {
        node.appendChild(this.node);
    }

    changeEmpty() {
        if (!this.empty) {
            this.line.removeAttribute("data-warn");
            setTimeout(()=>{
                $(this.shield.warn).tooltip("dispose");
            },1000)

        } else {
            this.line.dataset.warn = "Пустая панель";
            $(this.shield.warn).tooltip({
                title: "Пустая панель не будет сохранена",
                container: ".pagecreator-container",
            });
        }
    }

    changeDisplay() {
        this.display = !this.display;
        this.setDisplay();
    }

    changeAnchor() {
        this.anchor = !this.anchor;
        this.setAnchor();
    }

    safeControl() {
        if (this.safe_mod) {
            this.node.dataset.safe = "Панель связана";
        } else {
            this.node.removeAttribute("data-safe");
        }
    }

    setDisplay() {
        if (this.display) {
            this.node.classList.remove("list-group-item_hide");
            this.line.dataset.display = "1";
        } else {
            this.node.classList.add("list-group-item_hide");
            this.line.dataset.display = "0";
        }
    }

    setAnchor() {
        if (!this.anchor) {
            this.node.classList.remove("list-group-item_anchor");
            this.line.dataset.anchor = "0";
        } else {
            this.node.classList.add("list-group-item_anchor");
            this.line.dataset.anchor = "1";
        }
    }

    editPanel() {
        let modalWindow = new ModalWindow();
        let dataPanel = this;
        modalWindow.init({
            title: "Редактирование панели: " + this.title,
            body: dataPanel.getNodeForModalByEdit(),
        });
        console.log(dataPanel.content.work)
        let contentData = dataPanel.content.work
        dataPanel
            .openEditorByModal(modalWindow, contentData)
            .finally(() => {
                delete modalWindow.$modal;
                modalWindow = null;
            });
    }

    setOutData(data) {
        this.title = data.title;
        this.display = data.display;
        this.anchor = data.anchor;
        this.parent = data.parent;
        this.safe_id = data.id_boll;
        this.safe_id_panel = data.id_panel;
        this.safe_mod = data.safe;
        /****----- */
        [this.content.safe, this.content.frame, this.empty] = clearPanelData(
            data.content
        );
        this.content.frame = JSON.stringify(this.content.frame);
        this.content.safe = JSON.stringify(this.content.safe);

        this.content.work = this.content.safe;
        this.content.safe = false;

        this.content = new Proxy(this.content, {
            set: (target, prop, val, receiver) => {
                if (prop == "frame" || prop == "safe") return false;
                [val, , this.empty] = clearPanelData(JSON.parse(val));

                val = JSON.stringify(val);
                if (target.safe == val) this.safe_mod = true;
                else this.safe_mod = false;
                this.safeControl();

                if (target.frame == val) {
                    this.empty = true;
                }
                this.changeEmpty();

                return Reflect.set(target, prop, val, receiver);
            },
        });
    }

    init(param = { parent: this.dataHub.node_list }) {
        this.safeControl();
        this.setPanelNode(param.parent);
        this.state = true;
    }
}
