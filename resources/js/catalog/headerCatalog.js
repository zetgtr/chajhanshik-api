document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.catalog-modal');
    const leftContainer = document.querySelector('.left');
    const rightContainer = document.querySelector('.right');
    const value = document.querySelector("#catalog-value").value;
    const categories = JSON.parse(value);
    console.log(categories);
    function showSubcategories(categoryId) {
        // Очищаем правый контейнер
        rightContainer.innerHTML = '';

        // Ищем выбранную категорию по ID
        const category = categories.find(item => item.id === categoryId);

        // Если категория найдена, выводим подкатегории
        if (category && category.parent && category.parent.length > 0) {
            category.parent.forEach(subcategory => {
                const subcategoryItem = document.createElement('a');
                subcategoryItem.href = `/catalog/category/${subcategory.url}`;
                subcategoryItem.classList.add('subcategory')

                subcategoryItem.textContent = subcategory.title;
                rightContainer.appendChild(subcategoryItem);
            });
        }
    }

    container.addEventListener('mouseover', (event) => {
        const catalogModalItem = event.target.closest('.catalog-modal__item');
        if (catalogModalItem) {
            const categoryId = catalogModalItem.getAttribute('data-category-id');
            showSubcategories(parseInt(categoryId));
        }
    });
});
