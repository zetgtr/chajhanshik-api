class Search
{
    constructor() {
        this.searchTemplate = $(document.getElementById('search').content.children[0]).clone();
        this.productTemplate = $(document.getElementById('product').content.children[0]).clone();
        this.input = this.searchTemplate.find('#search-input');
        this.searchContainer = this.searchTemplate.find('#search-container');
        this.modalBody = $('#modaldemo8').find('.modal-body')
    }
    render()
    {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        this.modalBody.html('')
        this.modalBody.append(this.searchTemplate)
        this.input.on('input',({target})=>{
            if(target.value.length > 2)
                this.get(target.value)
        })
    }

    get(text)
    {
        axios({
            method: 'get',
            url: '/api/admin/catalog_search/'+text,
        }).then(({data}) => {
            this.searchContainer.html('')
            if(data.length > 0)
                data.forEach(el=>{
                    const productTemplateNode = this.productTemplate.clone()
                    productTemplateNode.find("#product-item").attr("href",el.url)
                    productTemplateNode.find('.text-sarch').html(el.title)
                    this.setButton(el,productTemplateNode)
                    this.searchContainer.append(productTemplateNode)
                })
            else
                this.searchContainer.text("Нечего не найдено")
            console.log(data)
        });;
    }
    setButton(data,productTemplateNode){
        console.log(data)
        const deleteBtn = productTemplateNode.find('.delete')
        deleteBtn.on('click',e=>{
            e.preventDefault()
            if(confirm("Вы точно хотите удалить?"))
                $.ajax({
                    type: "DELETE",
                    url: data.deleteUrl,
                    success: function(result) {
                        if (result.status) {
                            $(e.target).closest('.delete-element').remove()
                        }
                    },
                    error: function(xhr, status, error) {
                        try {
                            let errorMessage = JSON.parse(xhr.responseText).message;
                            console.log(errorMessage);
                        } catch (e) {
                            console.log('Error:', error);
                        }
                    }
                })
        })

        const showBtn = productTemplateNode.find('.delete')

    }
}

$(document).ready(()=>{
    $('.search').on('click',()=>{
        const search = new Search()
        search.render()
    })
})