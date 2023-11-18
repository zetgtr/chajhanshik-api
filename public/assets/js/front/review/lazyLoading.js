class lazy
{
    constructor() {
        this.data = JSON.parse($('#lazyLoading').val())
        this.count = +$('#countLoading').val()
        this.countSecondScroll = this.count
        this.item = $('.aos-wrapper').first().clone()
        this.container = $('.rewievs__wrapper')
        this.run()
    }

    run()
    {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    getLastVisibleElement()
    {
        const elements = document.querySelectorAll('.aos-wrapper');
        const windowHeight = window.innerHeight;
        let lastVisibleElement = null;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const rect = element.getBoundingClientRect();

            if (rect.top < windowHeight) {
                lastVisibleElement = element;
            } else {
                break;
            }
        }

        return lastVisibleElement;
    }

    handleScroll() {
        const lastVisibleElement = this.getLastVisibleElement();

        if (lastVisibleElement) {
            const index = lastVisibleElement.dataset.action;
            if(index > this.countSecondScroll-3) {
                console.log(this.countSecondScroll, index)
                this.countSecondScroll = this.countSecondScroll + this.count
                this.setDataLazy()
            }
        }
    }

    setDataLazy()
    {
        this.data = Array.prototype.slice.call(this.data, 10)
        const context = this
        axios.post('api/reviews_lazy',{items:this.data,count:this.countSecondScroll}).then(({data})=>{
            context.container.append(data)
        })
    }
}

$(document).ready(()=>{
    new lazy()
})
