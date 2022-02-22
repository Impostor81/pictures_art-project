// 1 вариант: когда карточки уже есть в верстке, но скрыти, по нажатию на кнопку "показать больше" - показываем их, и убираем саму кнопку

const showMore = (trigger, styles) => {
  const cards = document.querySelectorAll(styles);
  const btn = document.querySelector(trigger);

  cards.forEach(item => {
    item.classList.add('animated', 'fadeInUp');
  });


  btn.addEventListener('click', () => {
    cards.forEach(item => {
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });
    // btn.style.display = 'none';
    btn.remove();
  });
};

export default showMore;


// 2 вариант: когда карточек нет в верстке, но у нас есть объект в json файле, к которому обращаемся и оттуда подгружаем карточки, и убираем также саму кнопку
// const showMore = (trigger, wrapper) => {
//   const btn = document.querySelector(trigger);

//   btn.addEventListener('click', function() {
//       fetch('assets/db.json')
//           .then(res => res.json())
//           .then(data => createCards(data.styles))
//           .catch(error => console.log(error));

//       this.remove();
//   });

//   function createCards(response) {
//       response.forEach(({src, title, link}) => {
//           let card = document.createElement('div');

//           card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

//           card.innerHTML = `
//               <div class="styles-block">
//                   <img src=${src} alt="style">
//                   <h4>${title}</h4>
//                   <a href=${link}>Подробнее</a>
//               </div>
//           `;

//           document.querySelector(wrapper).append(card);
//       });
//   };
// };

// export default showMore;