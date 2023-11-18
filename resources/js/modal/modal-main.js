class ModalWindow {
    state = false;
    modal_template;
    modal_node;
    $modal;
    button_extends = {};

    save_modal = () => { };
    close_modal = () => { };
    open_modal = () => { };
    opened_modal = () => { };

    constructor(node, init = false) {
        this.modal_template = node;
        if (init) {
            this.init();
        }

    }
    init(param = {}) {
        this.getModalNode();
        this.insertTitle(param.title ?? '');
        this.insertNodeBody(param.body ?? null);
        this.setModalNode();
        this.state = true;
        return this;
    }

    destroy() {
        this.closeModal();
    }

    setModalNode() {
        document.body.appendChild(this.modal_node);
        return this;
    }

    async openModal4() {
        this.$modal = new bootstrap.Modal(this.modal_node);
        await this.$modal.show();

        const onCloseModal = () => {
            this.close_modal(this);
            if (this.$modal) {
                if (this.$modal._element) {
                    this.$modal._element.classList.remove("modal-open");
                    $(this.$modal._element).off("hidden.bs.modal", onCloseModal);
                    $(this.$modal._element).off("show.bs.modal", onOpenModal);
                    $(this.$modal._element).off("shown.bs.modal", onOpenedModal);
                }
                this.$modal.dispose();
                this.$modal = null;
            }
        };
        const onOpenModal = () => {
            this.open_modal(this);
        }
        const onOpenedModal = () => {
            this.opened_modal(this);
        }

        $(this.$modal._element).on("show.bs.modal", onOpenModal);
        $(this.$modal._element).on("shown.bs.modal", onOpenedModal);
        $(this.$modal._element).on("hidden.bs.modal", onCloseModal);
    }

    async openModal() {
        this.$modal = new bootstrap.Modal(this.modal_node);
        await this.$modal.show();

        const onCloseModal = () => {
            this.close_modal(this);
            if (this.$modal) {
                if (this.$modal._element) {
                    this.$modal._element.classList.remove("modal-open");
                    this.$modal._element.removeEventListener("hidden.bs.modal", onCloseModal);
                    this.$modal._element.removeEventListener("show.bs.modal", onOpenModal);
                    this.$modal._element.removeEventListener("shown.bs.modal", onOpenedModal);
                }
                this.$modal.dispose();
                this.$modal = null;
            }
        };
        const onOpenModal = () => {
            this.open_modal(this);
        }
        const onOpenedModal = () => {
            this.opened_modal(this);
        }


        this.$modal._element.addEventListener("show.bs.modal", onOpenModal);
        this.$modal._element.addEventListener("shown.bs.modal", onOpenedModal);
        this.$modal._element.addEventListener("hidden.bs.modal", onCloseModal);
    }

    saveModal() {
        this.save_modal(this);
        //   this.closeModal();
    }

    saveModalOpened() {
        this.save_modal(this);
    }

    addModalClass(class_name) {
        this.modal_node.classList.add(class_name);
    }

    removeModalClass(class_name) {
        this.modal_node.classList.remove(class_name);
    }
    addModalClassSize(class_name) {
        this.modal_node.querySelector('.modal-dialog').classList.add(class_name);
    }

    removeModalClassSize(class_name) {
        this.modal_node.querySelector('.modal-dialog').classList.remove(class_name);
    }

    closeModal() {
        this.$modal?.hide();
    }

    getModalNode() {
        let node = this.modal_template.content.children[0].cloneNode(true);
        console.log(node);
        this.node_button_extends = node.querySelector(".buttons-extends");
        node.classList.add("modal-pgcreator");
        node.querySelector(".modal-save").onclick = this.saveModal.bind(this);
        this.modal_node = node;
        return node;
    }
    getNavsNode() {
        return this.modal_node.querySelector(".modal-nav");
    }

    insertTitle(title = '') {
        this.modal_node.querySelector(".modal-title").innerHTML = title;
        return this;
    }
    addNodeBody(el = null) {
        if (el !== null && el instanceof Node) {
            this.modal_node.querySelector(".modal-wrapper").appendChild(el);
        }
        return this;
    }
    insertNodeBody(el = null) {
        this.modal_node.querySelector(".modal-wrapper").innerHTML = '';
        if (el !== null && el instanceof Node) {
            this.modal_node.querySelector(".modal-wrapper").appendChild(el);
        }
        return this;
    }
    insertNodeImg(url = null) {
        const imgContainer = this.modal_node.querySelector(".modal-img-container");
        if (url !== null) {
            imgContainer.querySelector('img').src = url;
        }
        return this;
    }
    insertWarning(el, flag = false) {
        console.log(el);
        this.modal_node.querySelector(".modal-warning").innerText = el;
        if (flag) {
            this.modal_node.querySelector(".modal-warning").classList.add('agree');
        }
        this.modal_node.querySelector(".modal-warning").classList.add('show');
        return this
    }
    deleteWarning(el = null) {
        if (this.modal_node.querySelector(".modal-warning").classList.contains('agree')) {
            this.modal_node.querySelector(".modal-warning").classList.remove('agree');
        }
        this.modal_node.querySelector(".modal-warning").innerText = '';
        this.modal_node.querySelector(".modal-warning").classList.remove('show');
        return this
    }
    insertNodeAudio(el = null) {
        this.modal_node.querySelector(".modal-audio").innerHTML = '';
        if (el !== null && el instanceof Node) {
            this.modal_node.querySelector(".modal-audio").appendChild(el);
        }
        return this;
    }
    clearModal() {
        const wrapper = this.modal_node.querySelector(".modal-wrapper");
        wrapper.innerHTML = '';
        return this;
    }

    saveToggle(flag = null) {
        let save = this.modal_node.querySelector(".modal-save");
        if (flag == null) {
            save.classList.toggle("d-none");
        }
        else if (flag == false) {
            save.classList.add("d-none");
        }
        else if (flag == true) {
            save.classList.remove("d-none");
        }
        return this;
    }

    closeToggle() {
        let close = this.modal_node.querySelector(".modal-close");
        close.classList.toggle("d-none");
        return this;
    }

    footerToggle() {
        let footer = this.modal_node.querySelector(".modal-footer");
        footer.classList.toggle("d-none");
        return this;
    }

    footerShow() {
        let footer = this.modal_node.querySelector(".modal-footer");
        footer.classList.remove("d-none");
        return this;
    }
    extendsHide() {
        let footer = this.modal_node.querySelector(".buttons-extends");
        footer.classList.add("d-none");
        return this;
    }
    extendsShow() {
        let footer = this.modal_node.querySelector(".buttons-extends");
        footer.classList.remove("d-none");
        return this;
    }
    footerHide() {
        let footer = this.modal_node.querySelector(".modal-footer");
        footer.classList.add("d-none");
        return this;
    }
    leftExtendButton(){
        let ext = this.modal_node.querySelector(".buttons-extends");
        ext.style = 'margin-right: auto;';
        return this;
    }
    rightExtendButton(){
        let ext = this.modal_node.querySelector(".buttons-extends");
        ext.style = 'margin-right: 0;';
        return this;
    }
    saveBtnHide(){
        let saveBtn = this.modal_node.querySelector(".modal-save");
        saveBtn.classList.add("d-none");
        return this;
    }
    saveBtnShow(){
        let saveBtn = this.modal_node.querySelector(".modal-save");
        saveBtn.classList.remove("d-none");
        return this;
    }
    navHide() {
        let nav = this.modal_node.querySelector(".modal-nav");
        nav.classList.add("d-none");
        return this;
    }
    navShow() {
        let nav = this.modal_node.querySelector(".modal-nav");
        nav.classList.remove("d-none");
        return this;
    }
    addExtendButton(param) {
        if (this.button_extends.hasOwnProperty(param.id))
            return this.button_extends[param.id];

        let node = document.createElement("button");
        let span = document.createElement("span");
        node.setAttribute("type", "button");
        node.className = "btn btn-sm";
        node.classList.add(`btn-${param.type}`);
        span.innerText = param.name;
        node.appendChild(span);
        node.onclick = param.fn; /* .bind({...param.context},2); */
        param.node = node;
        this.node_button_extends.append(node);

        if (param.loader) {
            let loader = document.createElement("span");
            loader.className = "spinner-grow spinner-grow-sm";
            loader.setAttribute("role", "status");
            loader.setAttribute("aria-hidden", "true");
            node.appendChild(loader);
        }

        this.button_extends[param.id] = param;

        return param;
    }

    toggleExtendButton(id) {
        if (this.button_extends.hasOwnProperty(id)) {
            let ext = this.button_extends[id];
            ext.node.classList.toggle("d-none");
        }
        return this;
    }
    showExtendButton(id) {
        if (this.button_extends.hasOwnProperty(id)) {
            let ext = this.button_extends[id];
            ext.node.classList.remove("d-none");
        }
        return this;
    }
    removeExtendButton(id) {
        if (this.button_extends.hasOwnProperty(id)) {
            let ext = this.button_extends[id];
            ext.node.remove();
            delete this.button_extends[id];
        }
        return this;
    }
}

export { ModalWindow };
