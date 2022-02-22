const pictureSize = () => {
  const allSizesBlocks = document.querySelectorAll('.sizes-block');

  allSizesBlocks.forEach(item => {
    const allP = item.querySelectorAll('p');

    item.addEventListener('mouseenter', () => {
      let img = item.firstElementChild;
      allP.forEach((el, index) => index !== 3 ? el.style.display = 'none' : 0);
      img.src = img.src.split('.')[0] + '-1.' + img.src.split('.')[1];
    });

    item.addEventListener('mouseleave', () => {
      let img = item.firstElementChild;
      img.src = img.src.split('.')[0].slice(0, -2) + '.' + img.src.split('.')[1];
      allP.forEach(el => el.style.display = 'block');
    });
  });
};

export default pictureSize;