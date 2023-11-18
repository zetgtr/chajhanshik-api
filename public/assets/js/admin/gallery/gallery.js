class Gallery
{
    constructor() {
        this.editNodes = document.querySelectorAll('.edit_image')
        this.deleteNodes = document.querySelectorAll('.delete_image')
        this.titleInput = document.querySelector('[name="title"]');
        this.descriptionInput = document.querySelector('[name="description"]');
        this.imageContainer = document.querySelector('.files-unstyled');
        this.form = document.getElementById('photo_gallery_form');
        this.idEdit = document.getElementById('id_edit');
        this.formTitle = document.querySelector('.category_form_title');
        this.formMethod = document.getElementById('method');
        this.imageCheck = document.getElementById('image');
        this.editCloseBtn = document.querySelector('.edit_close');
        this.addEvent()
    }

    addEvent()
    {
        this.editNodes.forEach(el=>el.addEventListener('click',(event)=>{
            this.editImage($(event.target).closest('li'))
        }))
        this.editCloseBtn.addEventListener('click',(e)=>{
            e.preventDefault()
            this.editClose()
        })

        this.deleteNodes.forEach(el => el.addEventListener('click', function(e) {
            if (!this.imageCheck) {
                if (confirm("Вы точно хотите удалить альбом с фотографиями?")) {
                    $(e.target).closest('form').submit();
                }
            } else {
                if (confirm("Вы точно хотите удалить фото?")) {
                    $(e.target).closest('form').submit();
                }
            }
        }.bind(this)));
    }

    editImage(node)
    {
        const id = node.attr('data-id')
        const type = node.attr('data-type')
        const url = "/api/admin/get_gallery_"+type;
        axios.post(url,{
            id
        }).then(({data})=>{
            if(data.status)
                this.setEdit(data)
            else
                alert(data.message)
        })
    }

    editClose()
    {
        this.titleInput.value = ""
        this.descriptionInput.value = ""
        this.imageContainer.innerHTML = ""
        if(!this.imageCheck) {
            this.form.action = "/admin/photo_gallery"
            this.formTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Добавить альбом'
        }else {
            this.form.action = "/admin/photo_gallery/image_create/"+this.imageCheck
            this.formTitle.innerHTML = '<i class="fas fa-plus-circle"></i> Добавить фото'
        }
        this.editCloseBtn.classList.add('d-none')
        this.formMethod.innerHTML = ""
        this.idEdit.value = ""
    }

    setEdit(image)
    {
        this.titleInput.value = image.title
        this.descriptionInput.value = image.description
        this.imageContainer.innerHTML = ""
        if(image.image_url) {
            this.setImage(image)
        }
        if(!this.imageCheck)
        {
            this.form.action = "/admin/photo_gallery/"+image.id
            this.formTitle.innerHTML = '<i class="fas fa-pen" style="margin-right: 5px;"></i>'+"Редактировать альбом"
            this.formMethod.innerHTML = '<input type="hidden" name="_method" value="PUT">'

        }else {
            this.form.action = "/admin/photo_gallery/image_edit/"+image.id
            this.formTitle.innerHTML = '<i class="fas fa-pen" style="margin-right: 5px;"></i>'+"Редактировать фото"
        }
        this.editCloseBtn.classList.remove('d-none')
        this.idEdit.value = image.id
    }

    setImage(image)
    {
        const aNode = document.createElement('a');
        aNode.setAttribute('data-fancybox', 'gallery');
        aNode.href = image.image_url;
        aNode.classList.add('gallery_box');
        const imageNode = new Image();
        imageNode.src = image.image_url;
        imageNode.classList.add('img-responsive')
        aNode.appendChild(imageNode);
        this.imageContainer.appendChild(aNode);
    }

}

$(document).ready(()=>{
    new Gallery()
})
