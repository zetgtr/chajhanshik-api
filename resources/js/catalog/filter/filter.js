class EditFilter {
    constructor() {
        this.container = $('.filter-container');
        this.infoName = this.container.find('#name_filter');
        this.aliasName = this.container.find('#alias_filter');
        this.typeName = this.container.find('#type_filter');
        this.categoryName = this.container.find('#category_filter');
        this.infoDanger = this.container.find('.info_danger');
        this.infoSuccess = this.container.find('.info_success');
        this.infoTitle = this.container.find('.info_title');
        this.id = this.container.find('#id_category');
        this.formInfo = this.container.find('#info_form');
        this.put = this.container.find('#route_put');
        this.btnEdit = this.container.find('.button-edit');

        this.addEvent()
    }
    addEvent() {
        const context = this;
        this.btnEdit.on('click', (e) => {
            e.preventDefault()
            console.log(context.put)
            context.putClone = context.put.clone();
            context.formInfo.attr('action', $(e.target).closest('.delete-element').find('.route_update').val());
            context.formInfo.append(context.putClone)
            let url = $(e.target).attr('href')
            if (!url) {
                url = $(e.target).parent('a').attr('href')
            }
            $.ajax({
                type: 'GET',
                url,
                success(data) {
                    if (data.status) {
                        const info = data.data;
                        context.infoDanger.removeClass('d-none');
                        context.infoDanger.on('click', (e) => context.exitEdit(e));

                        context.infoSuccess.text('Сохранить');
                        context.infoTitle.text('Редактировать категорию фильтарции: ' + info.name);

                        context.infoName.val(info.name)
                        context.aliasName.val(info.alias)
                        context.typeName.val(info.type)
                        context.categoryName.val(info.category_id)
                        context.id.val(info.id)
                    }
                }
            })
        })
    }

    exitEdit(e) {
        e.preventDefault()
        this.putClone.remove();
        this.formInfo.attr('action', $('#route_store').val());
        this.infoDanger.addClass('d-none');
        this.infoDanger.off('click', (e) => this.exitEdit(e));
        this.infoSuccess.text('Добавить');
        this.infoTitle.text('Добавить категорию');
        this.infoName.val('')
        this.aliasName.val('')
        this.typeName.val('')
        this.categoryName.val('')
        this.id.val('')
    }
}

$(document).ready(() => {
    new EditFilter();
})
