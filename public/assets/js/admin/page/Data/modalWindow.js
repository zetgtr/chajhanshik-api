export class ModalWindow {
    state = false;
    modal_template = d.getElementById("datahub_modal");
    modal_node;
    $modal;
    button_extends = {};

    save_modal = () => { };
    close_modal = () => { };
    open_modal = () => { };
    opened_modal = () => { };

    init(param) {
        this.getModalNode(param.title);
        this.insertNodeBody(param.body);
        this.setModalNode();
        this.state = true;
    }

    destroy() {
        this.closeModal();
    }

    setModalNode() {
        d.body.appendChild(this.modal_node);
        return this;
    }

    openModal() {
        this.$modal = $(this.modal_node)
            .on("show.bs.modal", () => {
                this.open_modal(this);
            })
            .on("shown.bs.modal", () => {
                this.opened_modal(this);
            })
            .on("hide.bs.modal", () => {
                this.close_modal(this);
                this.$modal.remove();
            })
            .modal();

// Explicitly show the modal
        this.$modal.modal("show");
        console.log(this.$modal.modal())
    }

    saveModal() {
        this.save_modal(this);
        this.closeModal();
    }

    addModalClass(class_name) {
        this.modal_node.className += ` ${class_name}`;
    }

    closeModal() {
        this.$modal.modal("hide");
    }

    getModalNode(title = "") {
        let node = this.modal_template.content.children[0].cloneNode(true);

        this.node_button_extends = node.querySelector(".buttons-extends");
        node.classList.add("modal-pgcreator");
        node.querySelector(".modal-title").innerText = title;
        node.querySelector(".modal-save").onclick = this.saveModal.bind(this);
        this.modal_node = node;
        return node;
    }

    insertNodeBody(el) {
        this.modal_node.querySelector(".modal-body").appendChild(el);
        return this;
    }

    saveToggle() {
        let save = this.modal_node.querySelector(".modal-save");
        save.classList.toggle("d-none");
    }

    addExtendButton(param) {
        if (this.button_extends.hasOwnProperty(param.id))
            return this.button_extends[param.id];

        let node = d.createElement("button");
        node.setAttribute("type", "button");
        node.className = "btn btn-sm";
        node.classList.add(`btn-${param.type}`);
        node.innerText = param.name;
        node.onclick = param.fn; /* .bind({...param.context},2); */
        param.node = node;
        this.node_button_extends.append(node);

        if (param.loader) {
            let loader = d.createElement("span");
            loader.className = "spinner-grow spinner-grow-sm";
            loader.setAttribute("role", "status");
            loader.setAttribute("aria-hidden", "true");
            node.appendChild(loader);
        }

        this.button_extends[param.id] = param;

        return param;
    }

    removeExtendButton(id) {
        if (this.button_extends.hasOwnProperty(id)) {
            let ext = this.button_extends[id];
            ext.node.remove();
            delete this.button_extends[id];
        }
    }
}
