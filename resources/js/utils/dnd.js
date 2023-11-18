import {Sortable} from '@shopify/draggable';

export default function SortAnimation() {
    const containers = document.querySelectorAll('#SortAnimation .BlockLayout');

    if (containers.length === 0) {
        return false;
    }

    console.log(Sortable)
    const sortable = new Sortable(containers, {
        draggable: '.Block--isDraggable',
        mirror: {
            constrainDimensions: true,
        },
        swapAnimation: {
            duration: 200,
            easingFunction: 'ease-in-out',
        },
    });

    return sortable;
}
const swappable = SortAnimation()
swappable.on('drag:stop', (event) => {
    setTimeout(()=>{
        const wrappers = document.querySelectorAll('.file-image')
        const order = []
        wrappers.forEach(el=>{
            if (el.id)
                order.push(el.id)
        })
        const type = document.getElementById('image') ? 'image' : 'category'

        axios.post("/api/admin/gallery/set_order_"+type,{
            order
        })
    },100)

});
