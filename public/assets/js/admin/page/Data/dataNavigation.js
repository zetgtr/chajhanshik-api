export class DataNavigation
{
    state = false;
    constructor() {
        this.id = makeid();
        this.linksNode = document.getElementById("links");
        this.data = this.linksNode.value ? JSON.parse(this.linksNode.value) : [];
        this.template = document.getElementById("datahub_links");
    }

    async getNavigationList(fn = {},modalWindow,reject){
        if (fn.hasOwnProperty("begin")) fn.begin();
        const {data} = await axios.get('/api/get_navigation_page')
        this.setView(data,modalWindow,reject)
        if (fn.hasOwnProperty("sucscess")) fn.sucscess();
    }

    changeSelectedOnly(storage) {
        console.log(1,storage)
    }

    changeSelected(dataLink,modal,reject){
        const context = this
        let reload = modal.addExtendButton({
            id: "add",
            name: "Сохранить",
            type: "success",
            loader: true,
            fn: () => {
                modal.close_modal = (modalWindow) => {
                    context.linksNode.value = JSON.stringify(context.data)
                    reload.node.disabled = false;
                    reject();
                };
                modal.saveModal();
                reload.node.disabled = false;
            },
        });
        dataLink.check = !dataLink.check
        dataLink.node.dataset.sel = dataLink.check ? "full" : 'frame'

        this.data = this.data.filter(el=>{
            return el !== dataLink.id
        })

        if(dataLink.check)
            this.data.push(dataLink.id);

        console.log(this.data)
    }

    setView(raw,modalWindow,reject){
        let node = this.template.content
            .getElementById("list_panel")
            .children[0].cloneNode(true);
        let panels = node.querySelector("tbody");

        this.larvae = {};
        raw.map((link) => {
            let item = this.template.content
                .getElementById("list_panel_item")
                .children[0].cloneNode(true)
                .querySelector("tr");
            this.larvae[link.id] = {
                id: link.id,
                check: this.data.includes(link.id) ?? false,
            };
            if(this.data.includes(link.id))
                item.dataset.sel = "full"
            let td = item.querySelectorAll("td");

            td[0].querySelector("span").innerText = this.larvae[
                link.id
                ].title = link.title;

            td[0].onclick = this.changeSelectedOnly.bind(
                this.larvae[link.id]
            );

            item.querySelector(".btn-full").onclick = this.changeSelected.bind(
                this,
                this.larvae[link.id],
                modalWindow,reject
            );

            this.larvae[link.id].node = panels.appendChild(item);
        });

        if (!panels.children.length)
            panels.appendChild(
                this.template.content
                    .getElementById("list_panel_item_empty")
                    .children[0].cloneNode(true)
                    .querySelector("tr")
            );

        this.node.textContent = "";
        this.node.appendChild(node);
    }

     getNavigationForModal() {
        this.node = document.createElement("div");
        this.node.id = this.id;
        this.node.setAttribute("name", "datahub_node_navigation");
        this.node.dataset.id = this.id;
        return this.node;
    }

    openNavigationByModal(modalWindow) {
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
                fn: this.getNavigationList.bind(this, {
                    begin: () => {
                        reload.node.disabled = true;
                    },
                    sucscess: () => {
                        reload.node.disabled = false;
                    },
                },modalWindow,reject),
            });

            this.getNavigationList({
                sucscess: () => {
                    modalWindow.openModal();
                },
                failure: () => {
                    reject();
                },
            },modalWindow,reject);
        });
    }
}
