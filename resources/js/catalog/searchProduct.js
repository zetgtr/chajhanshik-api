class SearchProduct
{
    constructor() {
        this.searchInput = document.getElementById('search')
        this.container = document.getElementById('search_container')
        this.url = document.getElementById('url')
        this.product = document.getElementById('templItem').content.children[0]
        this.addEvent()
    }

    addEvent(){
        this.searchInput.addEventListener('input',this.search.bind(this))
    }

    search(e){
        const search = this.searchInput.value
        const url = this.url;
        this.container.innerHTML = ""
        if (search.length > 2)
            axios.post('/catalog/search',{
                search
            }).then(({data})=>{
                if(data.status && data.products.length > 0){
                    data.products.forEach(el=>{
                        this.product = this.product.cloneNode(true)
                        if(el.images){
                            const image = JSON.parse(el.images)[0]
                            this.product.querySelector('.img-container').href = image
                            this.product.querySelector('.product__img').href = image
                        }
                        this.product.querySelector('.title-container').href = url+"/product/"+el.url
                        this.product.querySelector('.title').innerText = el.title
                        this.product.querySelector('.price').querySelector('span').innerText = el.price
                        this.container.appendChild(this.product);
                    })
                }else {
                    this.container.innerText = "По вашему запросу товары не найдены";
                }
            })
        else {
            this.container.innerText = "По вашему запросу товары не найдены"
        }
    }
}

$(document).ready(()=>{
    new SearchProduct()
})
