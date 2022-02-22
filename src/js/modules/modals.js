const modals = () => {
  let btnPressed = false;

  function bindModal (triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    let scroll = calcScroll();

    trigger.forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        // если пользователь кликнул хоть один раз на любую кнопку
        btnPressed = true;
        // убираем тригер (кнопку) после нажатия (если это необходимо)
        if (destroy) {
          el.remove();
        }

        // close all modal windows opened on page
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });


        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; //freeze scroll page except modal
        // document.body.classList.add('modal-open'); // same but using boostrap class
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      windows.forEach(item => item.style.display = 'none');

      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        windows.forEach(item => item.style.display = 'none');
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
        document.body.style.marginRight = `0px`;
      }
    });
  }
  // show modal in a few seconds (60sec)
  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  };

  // чтобы при появлении модального окна не прыгала страница по ширине, т.к. в этот момент появляется и пропадает скролл на ней
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }
  // показывает мод.окно если пользователь долистал до самого низа страницы и ни разу не нажал ни на одну кнопку
  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
        document.querySelector(selector).click();
      }
    })
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};

export default modals;