document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.querySelectorAll('[data-type="1"]');

    // tabsNav.forEach(item => {
    //     if (item.classList.contains('active')) {
    //         console.log(item);
    //     }
    // })


    //radio
    const tabsNavItem = document.querySelectorAll('.tabs-nav__item');
    const tabsItem = document.querySelectorAll('.tabs__item');

    tabsNavItem.forEach(item => {
        let labelRadio = item.querySelector('.tabs-nav__radio-label');
        let inputRadio = labelRadio.querySelector('input');
       if (inputRadio.checked) {
           item.classList.add('active');
           labelRadio.classList.add('active');
           tabsItem.forEach(tabItem => {
               if (inputRadio.value == tabItem.getAttribute('data-type')) {
                   tabItem.classList.add('active');
               }
           });
       }

       item.addEventListener('click', clickOnRadio);
    });


    function clickOnRadio(event) {
        tabsNavItem.forEach(item => {
            let labelRadio = item.querySelector('.tabs-nav__radio-label');
            let inputRadio = labelRadio.querySelector('input');
            labelRadio.classList.remove('active');
            item.classList.remove('active');
            inputRadio.checked = false;
        });
        event.currentTarget.classList.add('active');
        event.currentTarget.querySelector('.tabs-nav__radio-label').classList.add('active');
        event.currentTarget.querySelector('.tabs-nav__radio-label').querySelector('input').checked = true;
        renderTabItem(event.currentTarget.querySelector('.tabs-nav__radio-label').querySelector('input'));
    }

    function renderTabItem(inputRadio) {
        tabsItem.forEach(tabItem => {
            if (tabItem.getAttribute('data-type') == inputRadio.value) {
                tabItem.classList.add('active');
            } else {
                tabItem.classList.remove('active');
            }
        });
    }


    //map
    new Promise(resolve => ymaps.ready(resolve))
        .then(() => init())
        .catch(e => console.log(e.message));

    function init() {
        let myMap = new ymaps.Map('map', {

            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.608826, 39.599229],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
            controls: ['zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });


        myMap.controls.get('trafficControl').options.set('size', 'auto');
    }
});