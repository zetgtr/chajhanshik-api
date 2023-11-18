import {DataSection} from "./dataSection.js";
import {DataPanel} from "./dataPanel.js";
import {ModalWindow} from "./modalWindow.js";
import {DataText} from "./dataText.js";
import {DataNavigation} from "./dataNavigation.js";

export class DataHub {
    type = "root";
    id = "root";
    state = true;

    sortable_settings = sortable_settings;
    add_text = document.getElementById("datahub_add_text");

    add_navigation = document.getElementById("datahub_add_navigation");
    add_section = document.getElementById("datahub_add_section");
    add_panel = document.getElementById("datahub_add_panel");
    app = document.getElementById("datahub");
    storage_input = document.getElementById("datahub_storage");
    form = document.getElementById("page");
    parent;
    storage;
    node_list;
    List;
    removelist = {};
    chooselist = [];

    hub = {};
    axis = {};

    constructor() {
        this.dataHub = this;
        this.parent = this.id;
        this.node_list = document.createElement("div");

        this.node_list.className =
            "list-group nested-sortable nested-sortable-root";
        this.node_list.id = "datahub_workshop";

        this.sortable_settings = {
            ...this.sortable_settings,
            onRemove: this.dataHub.removeInHub.bind(this),
            onAdd: this.dataHub.registerInHub.bind(this),
            onUnchoose: (evn) => {
                let items = evn.items.length ? evn.items : [evn.item];
                let current_parent = this.dataHub.axis[items[0].dataset.id].parent;
                items.map((el) => {
                    let node = this.dataHub.axis[el.dataset.id];
                    if (node.parent != current_parent) {
                        this.dataHub.chooselist.map((old_el) => {
                            Sortable.utils.deselect(old_el.node);
                        });
                        this.dataHub.chooselist = [];
                    }
                    this.dataHub.chooselist.push(node);
                });
            },
            onChoose: (evn) => {
                this.dataHub.chooselist = [];
            },
        };

        try {
            if (this.storage_input.value.length)
                this.storage = JSON.parse(this.storage_input.value);
            else this.storage = false;

            this.List = new Sortable(this.node_list, this.sortable_settings);
            this.axis = { root: this };

            if (this.storage) this.buildData(this.storage);
        } catch (e) {
            d.body.classList.add("pgcr--fail");
            this.add_text.remove();
            this.add_section.remove();
            this.state = false;

            console.error(e);
        }
        this.app.appendChild(this.node_list);

        if (!this.state) alert("Данные страницы повреждены");
    }

    buildData(data, parent = this) {
        data.map((node) => {
            switch (node.type) {
                case "section":
                    let dataSection = new DataSection({
                        ...node,
                        parent: parent.id,
                    });
                    this.registerInAxis.call(parent, dataSection);
                    if (node._child.length) this.buildData(node._child, dataSection);
                    dataSection.init({ parent: parent.node_list });

                    break;
                case "text":
                    let dataText = new DataText({
                        ...node,
                        parent: parent.id,
                    });
                    this.registerInAxis.call(parent, dataText);
                    dataText.init({ parent: parent.node_list });

                    break;
                case "panel":
                    let dataPanel = new DataPanel({
                        ...node,
                        content: node.content,
                        parent: parent.id,
                    });
                    this.registerInAxis.call(parent, dataPanel);
                    dataPanel.init({ parent: parent.node_list });

                    break;
            }
        });
    }

    registerInAxis(node) {
        node.dataHub = this.dataHub;
        this.dataHub.axis[node.id] = node;
        this.dataHub.registerInHub.call({
            ...this,
            child: node,
        });
    }

    removeInAxis() {
        this.dataHub.removeInHub.call(this);
        let axis = this.dataHub.axis;
        delete axis[this.id];
        return true;
    }

    registerInHub(evn = null) {
        if (evn)
            this.dataHub.chooselist.map((el) => {
                this.hub[el.id] = el;
                el.parent = this.id;
            });
        else {
            this.hub[this.child.id] = this.child;
            this.child.parent = this.id;
        }
    }

    removeInHub(evn = null) {
        if (evn)
            this.dataHub.chooselist.map((el) => {
                delete this.hub[el.id];
            });
        else delete this.dataHub.axis[this.parent].hub[this.id];
    }

    serialize() {
        let res = [];
        this.List.toArray().map((id) => {
            if (!Object.keys(this.hub).length) return 1;

            let node = this.hub[id];
            console.log(node.content.safe)
            let node_data = {};
            switch (node.type) {
                case "section":
                    node_data.safe = node.safe_mod;
                    node_data.anchor = node.anchor;
                    node_data._child = node.serialize();
                    if (node.empty || !node_data._child.length) return 1;
                    break;
                case "text":
                    if (node.empty) return 1;
                    break;
                case "panel":
                    node_data.safe = node.safe_mod;
                    node_data.anchor = node.anchor;
                    node_data.id_panel = node.safe_id_panel;


                    console.log(node.content.work);
                    node_data.content = node.content.work



                    // if (node.empty) return 1;
                    break;
            }
            node_data = {
                ...{
                    display: node.display,
                    type: node.type,
                    content: node.content,
                    id: node.safe_id,
                },
                ...node_data,
            };
            // console.log(node_data)
            res.push(node_data);
        });
        return res;
    }

    buttonLockChange(btn) {
        btn.disabled = !btn.disabled;
    }

    addText() {
        this.buttonLockChange(this.add_text);
        let modalWindow = new ModalWindow();
        let dataText = new DataText();

        modalWindow.init({
            title: "Вставка текстового блока",
            body: dataText.getNodeForModal(),
        });

        dataText
            .openEditorByModal(modalWindow)
            .then(
                () => {
                    this.registerInAxis(dataText);
                    dataText.init();
                },
                () => {
                    dataText = null;
                }
            )
            .finally(() => {
                delete modalWindow.$modal;
                modalWindow = null;
                this.buttonLockChange(this.add_text);
            });
    }
    async addNavigation() {
        this.buttonLockChange(this.add_navigation);
        let modalWindow = new ModalWindow();
        let dataNavigation = new DataNavigation();

        modalWindow.init({
            title: "Навигация",
            body: await dataNavigation.getNavigationForModal(),
        });

        dataNavigation
            .openNavigationByModal(modalWindow)
            .then(
                () => {
                    this.registerInAxis(dataNavigation);
                    dataNavigation.init();
                },
                () => {
                    dataNavigation = null;
                }
            )
            .finally(() => {
                delete modalWindow.$modal;
                modalWindow = null;
                this.buttonLockChange(this.add_navigation);
            });
    }

    addSection() {
        let dataSection = new DataSection();
        this.registerInAxis(dataSection);
        dataSection.init();
    }

    addPanel() {
        this.buttonLockChange(this.add_panel);

        let dataPanel = new DataPanel();

        let modalWindow = new ModalWindow();

        modalWindow.init({
            title: "Редактор панелей",
            body: dataPanel.getNodeForModal(),
        });

        dataPanel
            .openSelectorByModal(modalWindow)
            .then(
                (panels) => {
                    dataPanel = null;
                    for (const id in panels) {
                        if (Object.hasOwnProperty.call(panels, id)) {
                            dataPanel = new DataPanel({
                                title: panels[id].title,
                                content: panels[id].content,
                                display: true,
                                id: false,
                                id_panel: id,
                                safe: panels[id].safe,
                                parent: this.id,
                            });
                            this.registerInAxis(dataPanel);
                            dataPanel.init();
                        }
                    }
                },
                () => {
                    dataPanel = null;
                }
            )
            .finally(() => {
                delete modalWindow.$modal;
                modalWindow = null;
                this.buttonLockChange(this.add_panel);
            });

    }

    goodBye() {
        let res = {};
        let data = this.serialize();

        let remove = this.removelist;
        if (data.length) res.data = data;
        if (Object.keys(remove).length) res.remove = remove;
        if (Object.keys(res).length)
            this.storage_input.value = JSON.stringify(res);
        console.log(data[1].content)

        // let form = $('#page');
        // let dataForm = form.serialize()
        //   dataForm
        //   console.log(dataForm)
        //
        //   $.ajax({
        //       type: "post",
        //       url: form.attr('action'),
        //       data: dataForm,
        //       success(data){
        //           console.log(data)
        //       }
        //   })

    }
}
