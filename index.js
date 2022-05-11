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
            latitude: 52.61131029077353,
            longitude: 39.57432284026451,
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

    let placemarks3 = [
        {
            latitude:52.59687727960435,
            longitude:39.5353505582838,
            hintContent: 'Липецк, ул. Стаханова, 2',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">Пункт выдачи заказов</div>\n' +
                '                                            <div class="aside-item__subtitle">Липецк, ул. Стаханова, 2</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.60846023200315,
            longitude:39.54836331760383,
            hintContent: 'Липецк, ул. Космонавтов, 37',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">Пункт выдачи заказов</div>\n' +
                '                                            <div class="aside-item__subtitle">Липецк, ул. Космонавтов, 37</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        },
        {
            latitude:52.57711252058072,
            longitude:39.51235246839194,
            hintContent: 'Липецк, Ул. Стаханова, 65',
            balloonContent: '<div class="aside-item">\n' +
                '                                            <div class="aside-item__title">Пункт выдачи заказов</div>\n' +
                '                                            <div class="aside-item__subtitle">Липецк, Ул. Стаханова, 65</div>\n' +
                '                                            <div class="aside-item__number">8 (800) 250 44 34</div>\n' +
                '                                            <div class="aside-item__working-hours">12:00 - 19:00, Пн - Пт; 12:00 - 17:00, Сб - Вс</div>\n' +
                '                                        </div>'
        }
    ];


    renderAsideItem(placemarks1, 'type_1');
    renderAsideItem(placemarks3, 'type_4');

    let geoObjects1 = [];
    let geoObjects2 = [];
    let geoObjects3 = [];

    function init() {
        let center = [39.599229, 52.608826];

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
            geoObjects1[i] = new ymaps.Placemark([placemarks1[i].longitude, placemarks1[i].latitude], {
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
           controls: ['geolocationControl', 'searchControl', 'zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });

        function onZonesLoad(json) {
            // Добавляем зоны на карту.
            var deliveryZones = ymaps.geoQuery(json).addToMap(myMap2);
            // Задаём цвет и контент балунов полигонов.
            deliveryZones.each(function (obj) {
                obj.options.set({
                    fillColor: obj.properties.get('fill'),
                    fillOpacity: obj.properties.get('fill-opacity'),
                    strokeColor: obj.properties.get('stroke'),
                    strokeWidth: obj.properties.get('stroke-width'),
                    strokeOpacity: obj.properties.get('stroke-opacity')
                });
                obj.properties.set('balloonContent', obj.properties.get('description'));
                obj.myid = 1;
                obj.events.add('click', (event) => {
                    console.log(event._cache.target.properties._data);
                    console.log(event._cache.target);
                });
            });

            // Проверим попадание метки геолокации в одну из зон доставки.
            myMap2.controls.get('geolocationControl').events.add('locationchange', function (e) {
                highlightResult(e.get('geoObjects').get(0));
            });

            function highlightResult(obj) {
                // Сохраняем координаты переданного объекта.
                let coords = obj.geometry.getCoordinates(),
                    // Находим полигон, в который входят переданные координаты.
                    polygon = deliveryZones.searchContaining(coords).get(0);

                if (polygon) {
                    // Уменьшаем прозрачность всех полигонов, кроме того, в который входят переданные координаты.
                    deliveryZones.setOptions('fillOpacity', 0.4);
                    polygon.options.set('fillOpacity', 0.8);
                    // Перемещаем метку с подписью в переданные координаты и перекрашиваем её в цвет полигона.
                    deliveryPoint.geometry.setCoordinates(coords);
                    deliveryPoint.options.set('iconColor', polygon.properties.get('fill'));
                    // Задаем подпись для метки.
                    if (typeof(obj.getThoroughfare) === 'function') {
                        setData(obj);
                    } else {
                        // Если вы не хотите, чтобы при каждом перемещении метки отправлялся запрос к геокодеру,
                        // закомментируйте код ниже.
                        ymaps.geocode(coords, {results: 1}).then(function (res) {
                            var obj = res.geoObjects.get(0);
                            setData(obj);
                        });
                    }
                } else {
                    // Если переданные координаты не попадают в полигон, то задаём стандартную прозрачность полигонов.
                    deliveryZones.setOptions('fillOpacity', 0.4);
                    // Перемещаем метку по переданным координатам.
                    deliveryPoint.geometry.setCoordinates(coords);
                    // Задаём контент балуна и метки.
                    deliveryPoint.properties.set({
                        iconCaption: 'Доставка транспортной компанией',
                        balloonContent: 'Cвяжитесь с оператором',
                        balloonContentHeader: ''
                    });
                    // Перекрашиваем метку в чёрный цвет.
                    deliveryPoint.options.set('iconColor', 'black');
                }

                function setData(obj){
                    var address = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
                    if (address.trim() === '') {
                        address = obj.getAddressLine();
                    }
                    var price = polygon.properties.get('description');
                    price = price.match(/<strong>(.+)<\/strong>/)[1];
                    deliveryPoint.properties.set({
                        iconCaption: address,
                        balloonContent: address,
                        balloonContentHeader: price
                    });
                }
            }
        }


        let data = fetch('data.geojson', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        });

        data.then(data => {
            console.log(data);
            onZonesLoad(data);
        });

        //map3
        let myMap3 = new ymaps.Map('map3', {
            center: center,
            zoom: 12,
            controls: ['zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });

        for (let i = 0; i < placemarks3.length; i++) {
            geoObjects3[i] = new ymaps.Placemark([placemarks3[i].longitude, placemarks3[i].latitude], {
               hintContent: placemarks3[i].hintContent,
               balloonContent: placemarks3[i].balloonContent
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'image/bluepoint.svg',
                iconImageSize: [30,40],
                iconImageOffset: [-15, -40]
            });
        }

        let clusterer3 = new ymaps.Clusterer({

        });

        myMap3.geoObjects.add(clusterer3);
        clusterer3.add(geoObjects3);
    }

    function renderAsideItem(placemarks, id) {
        const parent = document.getElementById(id);

        for (let i = 0; i < placemarks.length; i++) {
            parent.innerHTML += placemarks[i].balloonContent;
        }
    }
});