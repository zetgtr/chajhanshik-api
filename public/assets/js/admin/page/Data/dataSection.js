export class DataSection {
    type = "section";
    state = false;
    display = true;
    anchor = false;
    empty = true;
    content = "";
    template = d.getElementById("datahub_section");
    parent;
    node;
    node_list;
    line;
    Editor;
    List;
    dataHub;
    id;
    safe_id = false;
    safe_mod = false;

    hub = {};
    shield = {
        warn: undefined,
    };

    constructor(data = null) {
        if (data) this.setOutData(data);

        this.id = makeid();
        this.getSectionNode();

        return new Proxy(this, {
            /* get(target, prop, receiver) {
                        console.log(`GET ${prop}`);
                        return Reflect.get(target, prop, receiver); // (1)
                    }, */
            set(target, prop, val, receiver) {
                return Reflect.set(target, prop, val, receiver); // (2)
            },
        });
    }

    destroy(all = false) {
        if (this.safe_id) {
            if (!(this.type in this.dataHub.removelist))
                this.dataHub.removelist[this.type] = [];
            this.dataHub.removelist[this.type].push(this.safe_id);
        }
        if (all)
            this.List.toArray().map((child_id) =>
                this.dataHub.axis[child_id].destroy(all)
            );
        else if (!this.empty) {
            let shadow = new DocumentFragment();
            this.List.toArray().map((child_id) => {
                let child_el = this.dataHub.axis[child_id];
                this.dataHub.removeInHub.call(child_el);
                this.dataHub.registerInHub.call({
                    ...this.dataHub.axis[this.parent],
                    child: child_el,
                });

                shadow.appendChild(this.dataHub.axis[child_id].node);
            });
            this.node.after(shadow);
        }

        this.List.destroy();

        this.dataHub.removeInAxis.call(this);
        this.node.remove();
    }

    manipulator() { }

    serialize() {
        console.log(this.List.toArray(),this.dataHub.serialize.call(this))
        return this.dataHub.serialize.call(this);
    }

    getSectionNode(title = "") {
        let node = this.template.content.children[0].cloneNode(true);
        this.node = node;
        this.line = node.querySelector(".line");
        this.node_list = node.querySelector(".list-group");
        this.line.id = this.node.dataset.id = this.id;

        this.line.querySelector(".line__name").innerHTML = this.content
            ? this.content
            : "Введите заголовок";
        this.line.querySelector(".line__name").id = this.id + "_e";
        this.line.querySelector(".line__name").id = this.id + "_e";

        this.shield.warn = this.line.querySelector(".shield-warn");

        this.line.querySelector(".btn-show").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-hide").onclick =
            this.changeDisplay.bind(this);
        this.line.querySelector(".btn-anchor").onclick =
            this.changeAnchor.bind(this);
        this.line.querySelector(".btn-remove").onclick = this.destroy.bind(
            this,
            true
        );
        this.line.querySelector(".btn-remove_sect").onclick = this.destroy.bind(
            this,
            false
        );

        this.setDisplay();
        this.setAnchor();

        return node;
    }

    initList() {
        this.List = new Sortable(this.node_list, {
            ...this.dataHub.sortable_settings,
            ...{
                onSort: (evn) => this.changeEmpty(),
                onRemove: this.dataHub.removeInHub.bind(this),
                onAdd: this.dataHub.registerInHub.bind(this),
            },
        });
        this.List.toArray().map((id) => {
            if (!Object.keys(this.dataHub.hub).length) return 1;
            this.hub[id] = this.dataHub.hub[id];
        })
    }

    setSectionNode(node) {

        node.appendChild(this.node);

        this.initList();
        this.changeEmpty();
        this.safeControl();

        this.Editor = new tinymce.Editor(
            this.id + "_e",
            {
                language: 'ru',
                inline: true,
                toolbar: "styleselect | bold italic  | removeformat",
                menubar: false,
                forced_root_block: '',
                formats: {
                    removeformat: [
                        {
                            selector: '*',
                            remove: 'all',
                            split: false,
                            expand: false,
                            block_expand: true,
                            deep: true
                        }]
                },
                style_formats: [
                    { title: 'mark', inline: 'mark', exact: true },
                ],

            },
            tinymce.EditorManager
        );
        this.Editor.on("Change", () => {
            let content = this.Editor.getContent();
            this.content = this.changeContent(content);
        });
        this.line.querySelector(".btn-edit").onclick = () => {
            this.line.querySelector(".line__name").focus();
        };
    }

    changeContent(content) {
        let clear_content = this.cleanContentFromTag(content);
        if (clear_content) {
            if (this.line.dataset.warn == "Пустой заголовок") {
                this.line.removeAttribute("data-warn");
                setTimeout(()=>{
                    $(this.shield.warn).tooltip("dispose");
                },1000)
                // $(this.shield.warn).tooltip("dispose");
            }
            return content;
        } else {
            if (!this.line.dataset.warn) {
                this.line.dataset.warn = "Пустой заголовок";
                setTimeout(()=>{
                    $(this.shield.warn).tooltip("dispose");
                },1000)
                // $(this.shield.warn).tooltip("dispose");
                $(this.shield.warn).tooltip({
                    title: "Пустой заголовок",
                    container: ".pagecreator-container",
                });
            }
            return "";
        }
    }

    cleanContentFromTag(content = null) {
        let el = d.createElement("div");
        el.innerHTML = content || this.content;
        return el.innerText
            .replace(/[\n\s]+/g, " ")
            .trim()
            .replace(/Введите\sзаголовок/i, "");
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
            this.node.dataset.safe = "Секция связана";
        } else {
            this.node.removeAttribute("data-safe");
        }
    }

    changeEmpty() {
        let count_child = this.List.toArray().length;
        console.log(this.List.toArray())
        if (count_child) {
            this.empty = false;
            this.line.removeAttribute("data-warn");
            setTimeout(()=>{
                $(this.shield.warn).tooltip("dispose");
            },1000)
            // $(this.shield.warn).tooltip("dispose");
        } else {
            this.empty = true;
            this.line.dataset.warn = "Пустая секция";
            setTimeout(()=>{
                $(this.shield.warn).tooltip("dispose");
            },1000)
            // $(this.shield.warn).tooltip("dispose");
            $(this.shield.warn).tooltip({
                title: "Пустая секция не будет сохранена",
                container: ".pagecreator-container",
            });
        }
        this.changeContent(this.content);
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

    setOutData(data) {
        this.content = data.content;
        this.display = data.display;
        this.anchor = data.anchor;
        this.parent = data.parent;
        this.safe_mod = false;
        this.safe_id = data.id;
    }

    init(param = { parent: this.dataHub.node_list }) {
        this.setSectionNode(param.parent);
        this.Editor.render();
        this.state = true;
    }
}
