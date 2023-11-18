$(document).ready(()=>{
    $('.add_roles').on('click',()=>{
        let container = $('.modal-body');
        let addTemplate = $($('#add-role')[0].content.children[0]).clone()
        container.html('')
        container.closest('.modal-content').find('.modal-title').text('Добавить роль')
        container.append(addTemplate)
    })
})
