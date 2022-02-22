const filterTab = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');

  const typeFilter = (markType) => {
    markAll.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType.length > 0) {
      markType.forEach(item => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      let allPhotos = wrapper.querySelectorAll(`.${e.target.classList[0]}`);
      typeFilter(allPhotos);
    });
  });

  menu.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });

};

export default filterTab;

//2 вариант не самый оптимальный, много повторяющихся обработчиков событий добавляем и много переменных инициализируем:
// const filterTab = () => {
//   const menu = document.querySelector('.portfolio-menu');
//   const items = menu.querySelectorAll('li');
//   const btnAll = menu.querySelector('.all');
//   const btnLovers = menu.querySelector('.lovers');
//   const btnChef = menu.querySelector('.chef');
//   const btnGirl = menu.querySelector('.girl');
//   const btnGuy = menu.querySelector('.guy');
//   const btnGrandmother = menu.querySelector('.grandmother');
//   const btnGranddad = menu.querySelector('.granddad');
//   const wrapper = document.querySelector('.portfolio-wrapper');
//   const markAll = wrapper.querySelectorAll('.all');
//   const markGirl = wrapper.querySelectorAll('.girl');
//   const markLovers = wrapper.querySelectorAll('.lovers');
//   const markChef = wrapper.querySelectorAll('.chef');
//   const markGuy = wrapper.querySelectorAll('.guy');
//   const no = document.querySelector('.portfolio-no');

//   const typeFilter = (markType) => {
//     markAll.forEach(item => {
//       item.style.display = 'none';
//       item.classList.remove('animated', 'fadeIn');
//     });

//     no.style.display = 'none';
//     no.classList.remove('animated', 'fadeIn');

//     if (markType) {
//       markType.forEach(item => {
//         item.style.display = 'block';
//         item.classList.add('animated', 'fadeIn');
//       });
//     } else {
//       no.style.display = 'block';
//       no.classList.add('animated', 'fadeIn');
//     }
//   };

//   btnAll.addEventListener('click', () => {
//     typeFilter(markAll);
//   });

//   btnLovers.addEventListener('click', () => {
//     typeFilter(markLovers);
//   });

//   btnChef.addEventListener('click', () => {
//     typeFilter(markChef);
//   });

//   btnGirl.addEventListener('click', () => {
//     typeFilter(markGirl);
//   });

//   btnGuy.addEventListener('click', () => {
//     typeFilter(markGuy);
//   });

//   btnGrandmother.addEventListener('click', () => {
//     typeFilter();
//   });

//   btnGranddad.addEventListener('click', () => {
//     typeFilter();
//   });

//   menu.addEventListener('click', (e) => {
//     let target = e.target;
//     if (target && target.tagName === 'LI') {
//       items.forEach(item => item.classList.remove('active'));
//       target.classList.add('active');
//     }
//   });

// };

// export default filterTab;