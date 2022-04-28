document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.querySelectorAll('[data-type="1"]');

    // tabsNav.forEach(item => {
    //     if (item.classList.contains('active')) {
    //         console.log(item);
    //     }
    // })


    //radio
    const tabsItem = document.querySelectorAll('.tabs-nav__item');

    tabsItem.forEach(item => {
        let labelRadio = item.querySelector('.tabs-nav__radio-label');
        let inputRadio = labelRadio.querySelector('input');
       if (inputRadio.checked) {
           item.classList.add('active');
           labelRadio.classList.add('active');
       }

       item.addEventListener('click', clickOnRadio);
    });


    function clickOnRadio(event) {
        tabsItem.forEach(item => {
            let labelRadio = item.querySelector('.tabs-nav__radio-label');
            let inputRadio = labelRadio.querySelector('input');
            labelRadio.classList.remove('active');
            item.classList.remove('active');
            inputRadio.checked = false;
        });
        event.currentTarget.classList.add('active');
        event.currentTarget.querySelector('.tabs-nav__radio-label').classList.add('active');
        event.currentTarget.querySelector('.tabs-nav__radio-label').querySelector('input').checked = true;
    }



    //map
    new Promise(resolve => ymaps.ready(resolve))
        .then(() => init())
        .catch(e => console.log(e.message));

    function init() {
        let myMap = new ymaps.Map("map", {

            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.608826, 39.599229],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
        });
    }
});