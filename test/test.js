let age = prompt('Сколько Вам лет?', 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert('Привет!');
  };
} else {
  welcome = function () {
    alert('Здравствуйте!');
  };
}

welcome();
