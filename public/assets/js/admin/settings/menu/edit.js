$(document).ready(()=>{
    let menuDanger = $('.menu_danger');
    let menuSuccess = $('.menu_success');
    let menuTitle = $('.menu_title');
    let menuLogo = $('#menu_logo');
    let menuName = $('#menu_name');
    let menuUrl = $('#menu_url');
    let formMenu = $('#menu_form');
    let put = $('#route_put');
    let controller = $('#menu_controller');
    let controllerType = $('#menu_controller_type');
    let putClone;
    $('.button-edit').on('click',(e)=>{
        e.preventDefault()
        putClone = put.clone();
        formMenu.attr('action',$(e.target).closest('.delete-element').find('.route_update').val());
        formMenu.append(putClone)
        let url = $(e.target).attr('href')
        if(!url)
        {
            url = $(e.target).parent('a').attr('href')
        }
        $.ajax({
            type: 'GET',
            url,
            success(data)
            {
                if(data.status)
                {
                    let menu = data.menu;
                    menuDanger.removeClass('d-none');
                    menuDanger.on('click',(e)=>exitEdit(e));
                    menuSuccess.text('Сохранить');
                    menuTitle.text('Редактировать позицию: '+menu.name);
                    menuLogo.val(menu.logo)
                    menuName.val(menu.name)
                    menuUrl.val(menu.url)
                    controller.val(menu.controller)
                    if(menu.controller_type === "invocable")
                    {
                        controllerType.attr('checked', true)
                    }
                }
            }
        })
    })

    function exitEdit(e)
    {
        e.preventDefault()
        putClone.remove();
        formMenu.attr('action',$('#route_store').val());
        menuDanger.addClass('d-none');
        menuDanger.off('click',(e)=>exitEdit(e));
        menuSuccess.text('Добавить');
        menuTitle.text('Добавить меню');
        menuLogo.val('')
        menuName.val('')
        menuUrl.val('')
        controller.val('')
        controllerType.attr('checked', false)
    }
})
