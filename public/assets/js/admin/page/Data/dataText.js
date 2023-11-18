import {tinymce_param} from "../tinymce.js";

export class DataText {
    type = "text";
    state = false;
    display = true;
    content = "";
    template = d.getElementById("datahub_text");
    parent;
    node;
    line;
    Editor;
    dataHub;
    id;
    safe_id = false;
    empty = true;
    shield = {
        warn: undefined,
    };

    constructor(data = null) {
        if (data) this.setOutData(data);

        this.id = makeid();
        this.getTextNode();
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

    getTextNode(title = "") {
        let node = this.template.content.children[0].cloneNode(true);
        this.node = node;
        this.line = node.querySelector(".line");

        this.line.id = this.node.dataset.id = this.id;

        this.line.querySelector(".btn-show").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-hide").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-edit").onclick = this.editText.bind(this);
        this.line.querySelector(".btn-remove").onclick = this.destroy.bind(this);

        this.shield.warn = this.line.querySelector(".shield-warn");

        if (this.content) this.changeEmpty();
        else {
            this.line.querySelector(".line__name").innerText = "Заполните блок";
            this.line.dataset.warn = "Пустой блок";
        }

        this.setDisplay();
        return node;
    }

    setTextNode(node) {
        node.appendChild(this.node);
    }

    changeEmpty() {
        let content = this.cleanContentFromTag();
        if (content) {
            this.empty = false;
            this.line.removeAttribute("data-warn");
            this.line.querySelector(".line__name").innerText = content;
            setTimeout(()=>{
                $(this.shield.warn).tooltip("dispose");
            },1000)
            // $(this.shield.warn).tooltip("dispose");
        } else {

            this.empty = true;
            this.line.querySelector(".line__name").innerText = "Заполните блок";
            this.line.dataset.warn = "Пустой блок";
            $(this.shield.warn).tooltip({
                title: "Пустой блок не будет сохранен",
                container: ".pagecreator-container",
            });
        }
    }

    changeDisplay() {
        this.display = !this.display;
        this.setDisplay();
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

    cleanContentFromTag() {
        let el = d.createElement("div");
        el.innerHTML = this.content;
        return el.innerText.replace(/[\n\s]+/g, " ").trim();
    }

    getNodeForModal() {
        let el = document.createElement("textarea");
        el.className = "form-control";
        el.id = this.id;
        el.setAttribute("name", "datahub_node_text");
        el.dataset.id = el.id;
        return el;
    }

    openEditorByModal(modalWindow, content) {
        tinymce_param.target = modalWindow.modal_node.querySelector("textarea");
        tinymce_param.init_instance_callback = (editor) => (this.Editor = editor);
        return new Promise((resolve, reject) => {
            tinymce.init(tinymce_param).then(() => {
                $('.tox-tbtn').on('click',(e)=>{
                    function showModal(btn)
                    {
                        if(btn === 'Вставить/редактировать ссылку' || btn === 'Вставить/редактировать мультимедиа' || btn === 'Вставить/изменить изображение' || btn === 'Исходный код'){
                            $('.modal-pgcreator').css('visibility','hidden')
                            setTimeout(()=>{
                                $('.tox-dialog__footer-end').find('button').on('click',()=>{
                                    $('.modal-pgcreator').css('visibility','visible')
                                })
                                $('.tox-button').on('click',()=>{
                                    $('.modal-pgcreator').css('visibility','visible')
                                })
                            },500)
                        }

                    }
                    if($(e.target).attr('aria-label')){
                        showModal($(e.target).attr('aria-label'))
                    }else {
                        showModal($(e.target).closest('.tox-tbtn').attr('aria-label'));
                    }
                })
                this.Editor.setContent(this.content);
                this.Editor.addShortcut("meta+s", "Save content", () =>
                    modalWindow.saveModal()
                );

                modalWindow.opened_modal = (modalWindow) => {
                    this.Editor.focus();
                };

                if (!this.state) {
                    modalWindow.close_modal = (modalWindow) => {
                        this.Editor.destroy();
                        if (!this.empty) {
                            this.changeEmpty();
                            resolve();
                        } else reject();
                    };
                    modalWindow.save_modal = (modalWindow) => {
                        this.content = this.Editor.getContent();
                        this.empty = false;
                    };
                } else {
                    modalWindow.close_modal = (modalWindow) => {
                        this.Editor.destroy();
                        resolve();
                    };
                    modalWindow.save_modal = (modalWindow) => {
                        this.content = this.Editor.getContent();
                        this.changeEmpty();
                    };
                }

                modalWindow.openModal();
            });
        });
    }

    editText() {
        let modalWindow = new ModalWindow();
        let dataText = this;
        modalWindow.init({
            title: "Редактирование текстового блока",
            body: dataText.getNodeForModal(),
        });
        dataText.openEditorByModal(modalWindow, dataText.content).finally(() => {
            delete modalWindow.$modal;
            modalWindow = null;
        });
    }

    setOutData(data) {
        this.content = data.content;
        this.display = data.display;
        this.parent = data.parent;
        this.safe_id = data.id;
    }

    init(param = { parent: this.dataHub.node_list }) {
        this.setTextNode(param.parent);
        this.state = true;
    }
}
