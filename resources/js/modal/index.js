export class myModal {
    constructor(center = false) {
        this.modalNode = document.getElementById('exampleModal')
        this.modal = new bootstrap.Modal(this.modalNode)
        center ? this.modal._dialog.classList.add('modal-dialog-centered') : this.modal._dialog.classList.remove('modal-dialog-centered')
        this.title = this.modal._dialog.querySelector('.modal-title')
        this.body = this.modal._dialog.querySelector('.modal-body')
        this.footer = this.modal._dialog.querySelector('.modal-footer')
    }

    setTitle(title) {
        $(this.title).html(title)
    }

    setBody(el = null) {
        // $(this.body).html(body)
        this.body.innerHTML = '';
        if (el !== null) {
            this.body.appendChild(el);
        }
        return this;
    }

    setFooter(footer) {
        $(this.footer).html(footer)
    }

    setBodyTemplate(id) {
        const body = document.getElementById(id).content.children[0].cloneNode(true)
        this.setBody(body)
    }
    setFooterTemplate(id) {
        const footer = document.getElementById(id).content.children[0].cloneNode(true)
        this.setFooter(footer)
    }

    getBody() {
        return this.body
    }
    getModal() {
        return this.modal
    }

    setAddEventFooterBtn(id, fn) {
        $(this.footer).find(id).on('click', fn)
    }

    show() {
        this.beforeShow(this.modal);
        this.modal.show()
    }
    beforeShow() {

    }
    destroy() {
        this.modal.hide()
    }

    message(data) {
        let bodyMessage = document.createElement('div');
        bodyMessage.classList.add('message-center')
        bodyMessage.append(`${data.message}`)
        this.setBody(bodyMessage);
        this.setFooter('');
    }
}
