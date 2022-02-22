const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);

  menuElem.style.display = 'none';
  // проверяем если меню скрыто и ширина экрана 992 и меньше, то показываем его
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  // при ресайзе, т.е. например повернули гаджет в альбомную ориентацию, если больше 992 стала ширина, то меню должно исчезнуть
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none'
    }
  })
};

export default burger;