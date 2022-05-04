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

    const inputClose = document.querySelector('.delivery-address__input-close');

    inputClose.addEventListener('click', event => {
        const inputAddress = document.querySelector('#address');
        inputAddress.value = '';
    });


    //map
    new Promise(resolve => ymaps.ready(resolve))
        .then(() => init())
        .catch(e => console.log(e.message));

    let placemarks1 = [
        {
            latitude:52.61131029077353,
            longitude:39.57432284026451,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Москва, ул. Касаткина, 11с2, пункт выдачи транспортной компании DPD.</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.606212324288975,
            longitude:39.501963076721196,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Московская область, г. Подольск, ул. Железнодорожная, 2а</div>\n' +
                '                                            <div class="aside-item__number">+7 (495) 232 23 11 доб. 263.</div>\n' +
                '                                            <div class="aside-item__working-hours">10:00 - 19:00, ежедневно (включая выходные дни)</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.60544997,
            longitude:39.60712977,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Москва, ул. Касаткина, 11с2, пункт выдачи транспортной компании DPD.</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.64591314381722,
            longitude:39.67304999166509,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Москва, ул. Касаткина, 11с2, пункт выдачи транспортной компании DPD.</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.58400473365307,
            longitude:39.625892117693645,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Москва, ул. Касаткина, 11с2, пункт выдачи транспортной компании DPD.</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.63732935337195,
            longitude:39.51065336311334,
            hintContent: 'Хинт',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">ПВЗ «Деловые Линии»</div>\n' +
                '                                            <div class="aside-item__subtitle">Москва, ул. Касаткина, 11с2, пункт выдачи транспортной компании DPD.</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        }
    ];

    renderAsideItem(placemarks1);

    let geoObjects1 = [];

    function init() {
        let center = [52.608826, 39.599229];

        //map1
        let myMap1 = new ymaps.Map('map1', {

            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: center,
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12,
            controls: ['zoomControl'],
        }, {
            autoFitToViewport: 'always',
            searchControlProvider: 'yandex#search'
        });

        for (let i = 0; i < placemarks1.length; i++) {
            geoObjects1[i] = new ymaps.Placemark([placemarks1[i].latitude, placemarks1[i].longitude], {
                hintContent: placemarks1[i].hintContent,
                balloonContent: placemarks1[i].balloonContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'image/point.svg',
                iconImageSize: [30,40],
                iconImageOffset: [-15, -40]
            });
        }

        let clusterer1 = new ymaps.Clusterer({

        });

        myMap1.geoObjects.add(clusterer1);
        clusterer1.add(geoObjects1);

        //map2
        let myMap2 = new ymaps.Map('map2', {
           center: center,
           zoom: 12,
           controls: ['zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });

        //map3
        let myMap3 = new ymaps.Map('map3', {
            center: center,
            zoom: 12,
            controls: ['zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });
    }

    function renderAsideItem(placemarks) {
        const asideScroll = document.querySelector('.aside-scroll');

        for (let i = 0; i < placemarks.length; i++) {
            asideScroll.innerHTML += placemarks[i].balloonContent;
        }
    }
});