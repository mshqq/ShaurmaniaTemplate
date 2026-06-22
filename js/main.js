function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function callback() {
  let number = prompt('Введите ваш номер телефона');
  alert('Ожидайте звонок в течение 15 минут.');
}

// let password = prompt('Введите пароль:');
// if (password == 'mshqqSecretKey') {
//   document.body.style.display = 'block';
// } else {
//   alert('Ошибка авторизации: неправильный пароль');
// }

function selectCategory(id) {
  catBtn = document.getElementById(id);
  alert(catBtn.classList.includes('active'));
}

function subscribe() {
  alert('Вы успешно подписались на рассылку!');
}
