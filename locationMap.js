document.addEventListener('DOMContentLoaded', () => {
   new Promise(resolve => ymaps.ready(resolve))
       .then(() => init())
       .catch(e => console.log(e.message));


   function init() {
       //map1
       let myMap1 = new ymaps.Map('map1', {
           center: [37.430687217546,55.65827507482989],
           zoom: 16,
           controls: []
       }, {
           autoFitToViewport: 'always',
           searchControlProvider: 'yandex#search'
       }),
           myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
               hintContent: '108811, г. Москва, 47-й километр МКАД, с. 21, БЦ "Боровский".'
           }, {
               iconLayout: 'default#image',
               iconImageHref: 'image/bluepoint.svg',
               iconImageSize: [30,40],
               iconImageOffset: [-15, -40]
           });
       myMap1.geoObjects
           .add(myPlacemark1);

       //map2
       let myMap2 = new ymaps.Map('map2', {
               center: [37.56697049999997,55.41897706930095],
               zoom: 15,
               controls: []
           }, {
               autoFitToViewport: 'always',
               searchControlProvider: 'yandex#search'
           }),
           myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
               hintContent: '142103, Московская область, г. Подольск, ул. Железнодорожная, 2а'
           }, {
               iconLayout: 'default#image',
               iconImageHref: 'image/bluepoint.svg',
               iconImageSize: [30,40],
               iconImageOffset: [-15, -40]
           });
       myMap2.geoObjects
           .add(myPlacemark2);

       //map3
       let myMap3 = new ymaps.Map('map3', {
               center: [39.013768540783786,45.07995456010166],
               zoom: 18,
               controls: []
           }, {
               autoFitToViewport: 'always',
               searchControlProvider: 'yandex#search'
           }),
           myPlacemark3 = new ymaps.Placemark(myMap3.getCenter(), {
               hintContent: '350072 г. Краснодар, Ангарская, 40а'
           }, {
               iconLayout: 'default#image',
               iconImageHref: 'image/bluepoint.svg',
               iconImageSize: [30,40],
               iconImageOffset: [-15, -40]
           });
       myMap3.geoObjects
           .add(myPlacemark3);

       //map4
       let myMap4 = new ymaps.Map('map4', {
               center: [82.93859607729814,55.05283821580962],
               zoom: 18,
               controls: []
           }, {
               autoFitToViewport: 'always',
               searchControlProvider: 'yandex#search'
           }),
           myPlacemark4 = new ymaps.Placemark(myMap4.getCenter(), {
               hintContent: 'г. Новосибирск, ул. Николая Островского, д. 111к5, оф. 504 (5 этаж)'
           }, {
               iconLayout: 'default#image',
               iconImageHref: 'image/bluepoint.svg',
               iconImageSize: [30,40],
               iconImageOffset: [-15, -40]
           });
       myMap4.geoObjects
           .add(myPlacemark4);
   }
});