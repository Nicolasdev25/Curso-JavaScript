// funçao anonima

const somar = function (num1, num2) {
  return num1 + num2;
};

console.log(somar(2, 3));

// Função Arrow

const multiplicar = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplicar(2, 3));

const dobrar = (num) => {
  return num * 2; // const dobrar = num => num*2 (retorno implicito)
};

console.log(dobrar(4));
