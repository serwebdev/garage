const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function () {
  headerMenu.classList.toggle('show');
});

const swiper = new Swiper('.hero__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 1,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  // spaceBetween: 30,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  loop: true,

  // Автопрокрутка
  // autoplay: {
  // Задержка между переходами (в мс). Если этот параметр не указан, автовоспроизведение будет отключено.
  // delay: 1000,
  //Установите false и автовоспроизведение не будет отключено после взаимодействия с пользователем (пролистывания), оно будет перезапускаться каждый раз после взаимодействия
  // disableOnInteraction: false,
  // Когда включено, автовоспроизведение будет приостановлено при вводе мыши над контейнером Swiper. Если disableOnInteractionтакже включен, он остановит автовоспроизведение вместо паузы
  // pauseOnMouseEnter: true,
  // },

  // Брейкпоинты (точки останова)
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },

  //   Индек начального слайда
  //   initialSlide: 0,

  // Добавить (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
  // slidesOffsetAfter: 100,

  // Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
  // slidesOffsetBefore: 100,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
    // Размер перетаскиваемого элемента полосы прокрутки в пикселях
    // dragSize: "auto",
    // Установите, true чтобы сделать полосу прокрутки перетаскиваемой, что позволяет вам управлять положением ползунка
    // draggable: false,
  },
});

function modal(selectorModal, selectorButton) {
  // Кнопка открытия модального окна
  const openModal = document.querySelectorAll(selectorButton);

  // Элементы модального окна
  const modal = document.querySelector(selectorModal);
  if (modal && openModal.length) {
    const modalBody = modal.querySelector('.modal__body');
    const closeModal = modal.querySelector('.modal__btn');

    let clientWidth = document.documentElement.clientWidth;

    // Функция удаляет класс open
    function delClassOpen() {
      modal.classList.remove('open');
      modalBody.classList.remove('open');
    }

    // Возвращаем прокрутку и убираем padding-right
    function scrollShow() {
      document.body.style.overflowY = '';
      document.body.style.paddingRight = '';
      document.querySelector('html').style.overflowY = '';
    }

    // Открытие модального окна
    openModal.forEach(item => {
      item.addEventListener('click', function () {
        modal.classList.add('open');
        modalBody.classList.add('open');

        // Убираем прокрутку с body и добавляем padding-right
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        let scrollWidth = document.documentElement.clientWidth - clientWidth;
        document.body.style.paddingRight = `${scrollWidth}px`;
      });
    });

    // Закрытие модального окна по нажатию на крестик
    closeModal.addEventListener('click', function () {
      delClassOpen();

      scrollShow();
    });

    // Закрытие модального окна по клику вне окна
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        delClassOpen();

        scrollShow();
      }
    });

    // Закрытие по нажатию клавиши Esc
    document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
        delClassOpen();

        scrollShow();
      }
    });
  }
}

// Первый аргумент - селектор модального окна, второй - селектор кнопки открытия
modal('.popup', '.header__btn');
modal('.popup', '.hero__btn');
modal('.popup', '.advice__btn');
modal('.popup', '.firstscreen-techserv__btn');

// serv-repair accordion
const accordionHeader = document.querySelectorAll('.accordion__header');
const accordionBody = document.querySelectorAll('.accordion__body');

if (accordionHeader.length) {
  accordionHeader.forEach((item, i) => {
    item.addEventListener('click', () => {
      accordionBody[i].classList.toggle('show');
      if (accordionBody[i].classList.contains('show')) {
        accordionBody[i].style.height = accordionBody[i].scrollHeight + 'px';
        item.classList.add('active');
        item.querySelector('.accordion__header-icon').classList.add('active');
      } else {
        accordionBody[i].style.height = 0 + 'px';
        item.classList.remove('active');
        item
          .querySelector('.accordion__header-icon')
          .classList.remove('active');
      }
    });
  });
}

// AirDatepicker========================================================
if (document.querySelector('.input-calendar')) {
  adp = new AirDatepicker('.input-calendar', {
    timepicker: true,
  });
}

if (document.querySelector('.input-calendar2')) {
  adp = new AirDatepicker('.input-calendar2', {
    timepicker: true,
  });
}

// Inputmask=============================================================
let inputsTel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputsTel);



