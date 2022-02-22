// модуль для загрузки фотографий на сайт перетаскиванием с локальной папки
const dragDrop = () => {
  // dragenter - объект над dropArea
  // dragleave - объект за пределами dropArea
  // dragover - объект зависает и двигается над dropArea
  // drop - объект отправлен в dropArea

  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefFunc, false);
    });
  });

  function preventDefFunc(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = '1px solid grey';
    item.closest('.file_upload').style.opacity = '0.8';
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.opacity = '1';
    }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;

      let nameFile;
      const arr = input.files[0].name.split('.');
      arr[0].length < 7 ? nameFile = arr.join('.') : nameFile = arr[0].slice(0, 7) + '...' + arr[1];
      input.previousElementSibling.textContent = nameFile;
    });
  });
};

export default dragDrop;