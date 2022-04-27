document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.querySelectorAll('[data-type="nav"]');

    tabsNav.forEach(item => {
        if (item.classList.contains('active')) {
            console.log(item);
        }
    })
});