//metodo: filter()

const numeros = [10, 15, 20, 25, 30];

function isPar(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(isPar);

console.log(numerosPares);
