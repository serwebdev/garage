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
