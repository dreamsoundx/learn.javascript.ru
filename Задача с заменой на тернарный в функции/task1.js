function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

let check = checkAge(+prompt('Введите возраст'));
if (check === false) {
  alert('Всего хорошего');
} else {
  alert('Добро пожаловать');
}
