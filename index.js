document.addEventListener('DOMContentLoaded', () => {
    const tabsNav = document.querySelectorAll('[data-type="1"]');

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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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
            balloonContent: '<div id="tab1" class="aside-item">\n' +
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

    const itemDeliveryList = document.querySelectorAll('.aside-item-delivery');

    let geoObjects1 = [];
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
            controls: [],
        }, {
            autoFitToViewport: 'always',
            searchControlProvider: 'yandex#search'
        }),

            ZoomLayout = ymaps.templateLayoutFactory.createClass(`<div class="zoom-control">
        <div class="zoom-control__row">
            <div class="zoom-control__plus" id="zoom-in">
                <img src="image/plus_icon.svg">
            </div>
            <div class="zoom-control__minus" id="zoom-out">
                <img src="image/minus_icon.svg">
            </div>
        </div>
    </div>`, {

                // Переопределяем методы макета, чтобы выполнять дополнительные действия
                // при построении и очистке макета.
                build: function () {
                    // Вызываем родительский метод build.
                    ZoomLayout.superclass.build.call(this);

                    // Привязываем функции-обработчики к контексту и сохраняем ссылки
                    // на них, чтобы потом отписаться от событий.
                    this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                    this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                    // Начинаем слушать клики на кнопках макета.
                    $('#zoom-in').bind('click', this.zoomInCallback);
                    $('#zoom-out').bind('click', this.zoomOutCallback);
                },

                clear: function () {
                    // Снимаем обработчики кликов.
                    $('#zoom-in').unbind('click', this.zoomInCallback);
                    $('#zoom-out').unbind('click', this.zoomOutCallback);

                    // Вызываем родительский метод clear.
                    ZoomLayout.superclass.clear.call(this);
                },

                zoomIn: function () {
                    let map = this.getData().control.getMap();
                    map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                },

                zoomOut: function () {
                    let map = this.getData().control.getMap();
                    map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                }
            }),
            zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

        for (let i = 0; i < placemarks1.length; i++) {
            geoObjects1[i] = new ymaps.Placemark([placemarks1[i].longitude, placemarks1[i].latitude], {
                hintContent: placemarks1[i].hintContent,
                balloonContentHeader: placemarks1[i].balloonContent
                //balloonContent: placemarks1[i].balloonContent
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

        myMap1.controls.add(zoomControl, {
            position: {
                right: 10,
                top: 210
            }
        });
        myMap1.geoObjects.add(clusterer1);
        clusterer1.add(geoObjects1);

        myMap1.geoObjects.events.add('click', (e) => {
            let target = e.get('target');
            let coordsTarget = target.geometry.getCoordinates();
            console.log(coordsTarget);

            for (let asideItemElement of asideItem) {
                let coords = (asideItemElement.getAttribute('data-coords')).split(',');
                console.log(coords);
                if (coords[0] == coordsTarget[0] && coords[1] == coordsTarget[1]) {
                    asideItemElement.style.border = '2px solid #009DE0';
                } else {
                    asideItemElement.style.border = '2px solid #F7F7F7';
                }
            }
        });


        let asideItem = document.querySelectorAll('#tab1');

        for (let asideElement of asideItem) {
            asideElement.addEventListener('click', (event) => {
                let currentItem = event.currentTarget;
                for (let asideItemElement of asideItem) {
                    asideItemElement.style.border = '2px solid #F7F7F7';
                }
                currentItem.style.border = '2px solid #009DE0';
                let coords = (currentItem.getAttribute('data-coords')).split(',');
                myMap1.setCenter([coords[0],coords[1]], 14, {
                    checkZoomRange: false
                });
            });
        }

        //map2
        let myMap2 = new ymaps.Map('map2', {
           center: center,
           zoom: 12,
           controls: ['geolocationControl', 'zoomControl'],
        }, {
            autoFitToViewport: 'always'
        });

        function onZonesLoad(json) {
            // Добавляем зоны на карту.
            let deliveryZones = ymaps.geoQuery(json).addToMap(myMap2);
            // Задаём цвет и контент балунов полигонов.
            let key = 1;
            deliveryZones.each(function (obj) {
                obj.options.set({
                    fillColor: obj.properties.get('fill'),
                    fillOpacity: obj.properties.get('fill-opacity'),
                    strokeColor: obj.properties.get('stroke'),
                    strokeWidth: obj.properties.get('stroke-width'),
                    strokeOpacity: obj.properties.get('stroke-opacity')
                });
                obj.properties.set('balloonContent', obj.properties.get('description'));
                obj.myid = key;
                ++key;
                obj.events.add('click', (event) => {
                    //console.log(event._cache.target.properties._data);
                    //console.log(event._cache.target);
                    console.log(event._cache.target.myid);
                    let currentZone = event._cache.target;
                    let currentColor = currentZone.options._options.fillColor;
                    deliveryZones.each(obj => {
                        if (currentZone.myid === obj.myid) {
                            obj.options.set('fillOpacity', 0.6);
                        } else {
                            obj.options.set('fillOpacity', 0.2);
                        }
                    });
                    itemDeliveryList.forEach(item => {
                        if (item.getAttribute('data-id') == currentZone.myid) {
                            item.style.border = `2px solid ${currentColor}`;
                        } else {
                            item.style.border = '2px solid #F7F7F7';
                        }
                    });
                });
            });


            myMap2.events.add('click', event => {
               let coords = event.get('coords');
               console.log(coords);
               itemDeliveryList.forEach(item => {
                  item.style.border = '2px solid #F7F7F7';
               });

                deliveryZones.each(obj => {
                    obj.options.set('fillOpacity', 0.2);
                });
            });
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

    const itemTab1 = document.querySelectorAll('#tab1');

    for (let i = 0; i < itemTab1.length; i++) {
        if (placemarks1[i]) {
            let coords = [placemarks1[i].longitude, placemarks1[i].latitude];
            itemTab1[i].setAttribute('data-coords', coords);
            console.log(itemTab1[i].getAttribute('data-coords'));
        }
    }
    console.log(itemTab1);
});