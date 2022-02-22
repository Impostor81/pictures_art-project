// import checkNumInput from './checkNumInput';

const forms = () => {
  const allForms = document.querySelectorAll('form');
  const allInputs = document.querySelectorAll('input');
  const allTextAreas = document.querySelectorAll('textarea');
  const upload = document.querySelectorAll('[name="upload"]');

  // checkNumInput('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  }

  const postData = async (url, data) => {
    let result = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await result.text();
  }

  const clearInputs = () => {
    allInputs.forEach(item => item.value = '');
    allTextAreas.forEach(item => item.value = '');
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let nameFile;
      const arr = item.files[0].name.split('.');
      arr[0].length < 7 ? nameFile = arr.join('.') : nameFile = arr[0].slice(0, 7) + '...' + arr[1];
      item.previousElementSibling.textContent = nameFile;
    });
  });

  allForms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.style.textAlign = 'center';
      item.parentNode.append(statusMessage);

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.append(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
      console.log(api);

      postData(api, formData)
        .then(data => {
          console.log(data);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');
          }, 5000);
        })
    });
  });
}

export default forms;