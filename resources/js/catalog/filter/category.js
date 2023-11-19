class EditCategoryFilter {
    constructor() {
        this.container = $('.category-filter-container');
        this.infoName = this.container.find('#name_category');
        this.infoDanger = this.container.find('.info_danger');
        this.infoSuccess = this.container.find('.info_success');
        this.infoTitle = this.container.find('.info_title');
        this.id = this.container.find('#id_category');
        this.open = this.container.find('#open');
        this.formInfo = this.container.find('#filter_category');
        this.put = this.container.find('#route_put');
        this.btnEdit = this.container.find('.button-edit');

        this.addEvent()
    }
    addEvent() {
        const context = this;
        this.btnEdit.on('click', (e) => {
            e.preventDefault()
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
                        context.id.val(info.id)
                        if (info.open == 'on') {
                            context.open.prop('checked', true);
                        }else{
                            context.open.prop('checked', false);
                        }
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
        this.id.val('')
        this.open.prop('checked', false);
    }
}

$(document).ready(() => {
    new EditCategoryFilter();
})
