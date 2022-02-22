// collapse-element
// 1 способ с использованием CSS
// const accordeon = (triggersSelector, itemsSelector) => {
//   const btns = document.querySelectorAll(triggersSelector);
//   const blocks = document.querySelectorAll(itemsSelector);

//   blocks.forEach(item => item.classList.add('animated', 'fadeInDown'));

//   btns.forEach(btn => {
//     btn.addEventListener('click', function() {
//       if (!this.classList.contains('active')) {
//         btns.forEach(item => {
//           item.classList.remove('active', 'active-style');
//         });
//       }
//       this.classList.add('active', 'active-style');
//     });
//   });
// };

// export default accordeon;

// для реализации нам потребовалось добавить эти несколько строк в CSS стили:

// .often-questions p.active-style span {
//   color: #E950D7;
//   font-weight: 900;
//   text-decoration: none;
//   border: 0;
// }

// .often-questions .accordion-block {
//   display: none;

// }
// .often-questions .accordion-heading.active+.accordion-block {
//   display: block;
// }


// 2 способ уже чисто с JS анимацией
const accordeon = (triggersSelector) => {
  const btns = document.querySelectorAll(triggersSelector);

  // добавил для того, если нужно чтобы при открывании одного все остальные закрывались, если нужно чтобы все отркрываться могли одновременно, то нужно убрать эти 6 строчек ниже
  btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      btns.forEach(el => {
        el.classList.remove('active-style');
        el.nextElementSibling.classList.remove('active-content');
        el.nextElementSibling.style.maxHeight = '0px';
      });

      e.currentTarget.classList.toggle('active-style');
      // можно также через this обратится: this.classList..., в данном случае e.curremtTarget = this
      this.nextElementSibling.classList.toggle('active-content');

      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
};

export default accordeon;

// в стилях добавим стили, убрав предыдущие, в том числе display:
// .often-questions .accordion-block {
//   background-color: #f7e7e6;
//   max-height: 0;
//   opacity: 0;
//   transition: all 0.3s ease-out;
//   overflow: hidden;

// марджины и паддинги убрали из селектора выше, и вставили в этот:
// .often-questions .accordion-block.active-content {
//   overflow: visible;
//   opacity: 1;
//   padding: 3rem 4rem;
//   margin-top: 1rem;
// }
