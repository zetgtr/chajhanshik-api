$(document).ready(()=>{
    let container = $('.modal-body');
    let title = $('.modal-title')
    let addTemplate = $($('#add-packages')[0].content.children[0]).clone()
    let addUrl = addTemplate.find('#form-add-edit').attr('action')
    let seederTemplate = $($('#seeder_template')[0].content.children[0]).clone()
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    function seeder(){
        container.find('#seeder').on('change',()=>{
            if(container.find('#seeder').prop('checked')){
                container.find('.seeder-form').after(seederTemplate)
            }else {
                $('.seeder_box').remove()
            }
        })
    }
    $('.add-packages').on('click',()=>{
        title.text('Добавить пакет')
        container.html("")
        container.append(addTemplate)
        container.find('#form-add-edit').attr('action',addUrl)
        $('#button_success').val('Добавить')
        seeder()
    })
    function preventUnload(event) {
        event.preventDefault();
        event.returnValue = '';
    }
    $('.install-packages').on('click',(e)=>{

        window.addEventListener('beforeunload', preventUnload);
        // modal.on('')
        title.text('Установка')
        container.html("")
        let containerLoader = document.createElement('div')
        let text = document.createElement('p')
        let loader = document.createElement('div')
        loader.classList.add('loader')
        containerLoader.classList.add('d-flex')
        containerLoader.classList.add('flex-column')
        containerLoader.classList.add('align-items-center')
        text.innerText = "Идет установка, пожалуйста, подождите!"
        containerLoader.append(text)
        containerLoader.append(loader)
        container.append(containerLoader)
        const form = $('#form-install')
        const data = new FormData(form[0])
        $.ajax({
            type: "PUT",
            url: form.attr('action'),
            data: {
                packages_install: data.get('packages_install')
            },
            dataType: "json",
            success(data){
                const text = document.createElement('p')
                const containerBtnNode = document.createElement('div')
                const btnNode = document.createElement('button')
                containerBtnNode.classList.add('container_btn_modal')
                btnNode.classList.add('btn')
                btnNode.classList.add('btn-sm')
                btnNode.classList.add('btn-primary')
                $(btnNode).attr('aria-label',"Close")
                $(btnNode).attr('data-bs-dismiss',"modal")
                btnNode.innerText = "Закрыть"
                if(data.type == "success")
                {
                    $.ajax({
                        type: "PUT",
                        url: data.route,
                        dataType: "json",
                        success(val){
                            container.html("")
                            const containerPackages = $($("#"+val.type+"-template")[0].content.children[0]).clone()
                            if(val.type == "success")
                            {
                                const selectRemoveNode = $('#packages')
                                const optionInstallNode = $('#packages_install option:selected')
                                const optionNode = document.createElement('option')
                                optionNode.value = optionInstallNode.val()
                                optionNode.id = "package-"+optionInstallNode.val()
                                optionNode.innerText = optionInstallNode.text()
                                selectRemoveNode.append(optionNode)
                            }

                            text.innerText = val.message
                            text.classList.add(val.type+"-text")
                            containerPackages.append(text)
                            container.append(containerPackages)
                            containerBtnNode.append(btnNode)
                            window.removeEventListener('beforeunload', preventUnload);
                            container.append(containerBtnNode)
                        }
                    })
                }else {
                    window.removeEventListener('beforeunload', preventUnload);
                    const containerPackages = $($("#"+data.type+"-template")[0].content.children[0]).clone()
                    container.html("")
                    text.innerText = data.message
                    text.classList.add(data.type+"-text")
                    containerPackages.append(text)
                    container.append(containerPackages)
                    containerBtnNode.append(btnNode)
                    container.append(containerBtnNode)
                }
            }
        })
    })
    $('.delete-packages').on('click',()=> {
        window.addEventListener('beforeunload', preventUnload);
        title.text('Удаление')
        container.html("")
        let containerLoader = document.createElement('div')
        let text = document.createElement('p')
        let loader = document.createElement('div')
        loader.classList.add('loader')
        containerLoader.classList.add('d-flex')
        containerLoader.classList.add('flex-column')
        containerLoader.classList.add('align-items-center')
        text.innerText = "Идет удаление, пожалуйста, подождите!"
        containerLoader.append(text)
        containerLoader.append(loader)
        container.append(containerLoader)
        const form = $('#form-remove')
        const data = new FormData(form[0])
        $.ajax({
            type: "DELETE",
            url: form.attr('action'),
            data: {
                packages: data.get('packages')
            },
            success(val) {
                container.html("")
                window.removeEventListener('beforeunload', preventUnload);
                const text = document.createElement('p')
                const containerBtnNode = document.createElement('div')
                const btnNode = document.createElement('button')
                containerBtnNode.classList.add('container_btn_modal')
                btnNode.classList.add('btn')
                btnNode.classList.add('btn-sm')
                btnNode.classList.add('btn-primary')
                $(btnNode).attr('aria-label', "Close")
                $(btnNode).attr('data-bs-dismiss', "modal")
                btnNode.innerText = "Закрыть"
                const containerPackages = $($("#" + val.type + "-template")[0].content.children[0]).clone()
                if (val.type == "success") {

                    const optionRemoveNode = $('#package-' + data.get('packages'))
                    optionRemoveNode.remove()
                }
                text.innerText = val.message
                text.classList.add(val.type + "-text")
                containerPackages.append(text)
                container.append(containerPackages)
                containerBtnNode.append(btnNode)
                container.append(containerBtnNode)
            }
        })
    })
    $('.edit-packages').on('click',(e)=>{
        title.text('Редактировать пакет ...')
        container.html("")
        container.append("Загрузка ...")
        let addTemplateNode = addTemplate.clone()
        let seederTemplateNode = seederTemplate.clone()
        let editUrl = $('#packages_install option:selected').attr('data-edit');
        $.ajax({
            url: $('#packages_install option:selected').attr('data-url'),
            type: "get",
            success(data)
            {
                container.html("")
                if(data.status){
                    title.text('Редактировать пакет '+data.name);
                    container.append(addTemplateNode)
                    container.find('#form-add-edit').attr('action',editUrl)
                    container.find('#name').val(data.name)
                    container.find('#url').val(data.url)
                    container.find('#delete').val(data.delete)
                    container.find('#provider').val(data.provider)
                    if(data.migration)
                    {
                        container.find('#migration').attr('checked',true)
                    }
                    if(data.script)
                    {
                        container.find('#script').attr('checked',true)
                    }
                    if(data.view)
                    {
                        container.find('#view').attr('checked',true)
                    }
                    if(data.vue)
                    {
                        container.find('#vue').attr('checked',true)
                    }
                    if(data.seeder)
                    {
                        container.find('#seeder').attr('checked',true)
                        container.find('.seeder-form').after(seederTemplateNode)
                        container.find('#name_seeder').val(data.name_seeder)
                    }
                    $('#button_success').val('Редактировать')
                    seeder()
                } else {
                    container.append("Выберите пакет")
                }
            }
        })
    })
})
