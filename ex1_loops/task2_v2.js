function showPrimes(number) {
  for (let i = 2; i < number; i++) {
    if (!isPrime(i)) {
      continue;
    }
    alert(i);
  }
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
let number = prompt('Введите число');
showPrimes(number);
