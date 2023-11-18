class Files {

    fileInput;
    fileBtn;

    constructor() {
        this.fileInput = document.querySelectorAll('.upload_image');
    }

    galleryAdmin()
    {
        this.fileInput.forEach(el=>
        el.addEventListener('change', function (event) {
            const files = event.target.files;
            const attribute = this.getAttribute('data-preview');
            const preview = document.querySelector("." + attribute);

            preview.innerHTML = '';

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();

                    reader.addEventListener('load', function (readerEvent) {
                        const aNode = document.createElement('a');
                        aNode.setAttribute('data-fancybox', 'gallery');
                        aNode.href = readerEvent.target.result;
                        aNode.classList.add('gallery_box');
                        const image = new Image();
                        image.src = readerEvent.target.result;
                        image.classList.add('img-responsive')
                        aNode.appendChild(image);
                        preview.appendChild(aNode);
                    });
                    reader.readAsDataURL(file);
                }
            }
        }))
    }
}

const filesClass = new Files();
