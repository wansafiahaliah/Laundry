document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const question = item.querySelector('.accordion-question');
        question.addEventListener('click', function () {
            // Close all other accordions
            items.forEach(i => {
                if (i !== item) i.classList.remove('active');
            });
            // Toggle current accordion
            item.classList.toggle('active');
        });
    });
});