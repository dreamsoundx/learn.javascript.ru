function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

let check = checkAge(+prompt('Введите возраст'));
if (check === false) {
  alert('Досвидос');
} else {
  alert('Добро пожаловать');
}
