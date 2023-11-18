$(document).ready(()=>{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.edit-role').on('click',(e)=>{
        let url = $(e.target).attr('href')
        let roleId = $(e.target).attr('data-id')
        let roleName = $(e.target).attr('data-name')
        if(!url){
            roleId = $(e.target).closest('.edit-role').attr('data-id')
            roleName = $(e.target).closest('.edit-role').attr('data-name')
            url = $(e.target).closest('.edit-role').attr('href')
        }
        let container = $('.modal-body');
        container.html("")
        $.ajax({
            type: 'GET',
            url,
            success(data){
                if(typeof data === 'object'){
                    data = Object.values(data)
                }
                let editTemplate = $($('#edit-role')[0].content.children[0]).clone()
                let content = $(editTemplate).find('.table-edit-role-tr').first()[0].cloneNode(true);
                editTemplate.find('tbody').html('');

                container.closest('.modal-content').find('.modal-title').text('Редактировать роль: '+roleName)
                console.log(editTemplate)
                data.forEach(el=>{
                    content = content.cloneNode(true)
                    $(content).find('.text-menu').text(el.name);
                    if(el.show){
                        $(content).find('.show-publish').attr('data-id',el.id).attr('class','btn btn-success show-publish')
                        $(content).find('.show-publish').find('i').attr('class','far fa-eye')
                    }else {
                        $(content).find('.show-publish').attr('data-id',el.id).attr('class','btn btn-default show-publish')
                        $(content).find('.show-publish').find('i').attr('class','far fa-eye-slash')
                    }
                    $(editTemplate).find('table').append(content);
                })
                container.append(editTemplate)
                $('.show-publish').on('click',(e)=>{
                    e.preventDefault()
                    let menu = $(e.target).attr('data-id')
                    let item = $(e.target)
                    if(!menu){
                        item = $(e.target).closest('.show-publish')
                        menu = $(e.target).closest('.show-publish').attr('data-id')
                    }

                    console.log(roleId);
                    $.ajax({
                        type: 'GET',
                        url: $('#app_url').val()+'/admin/roles/'+roleId,
                        data: {
                            menu
                        },
                        success(data) {
                            console.log(item)
                            if(data){
                                $(item).attr('class','btn btn-success show-publish')
                                $(item).find('i').attr('class','far fa-eye')
                            }else {
                                $(item).attr('class','btn btn-default show-publish')
                                $(item).find('i').attr('class','far fa-eye-slash')
                            }
                        }
                    })
                    console.log(menu)
                })
            }
        })
    })
})
