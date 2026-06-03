//encadeiamento

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//exemplo: filtrar os pares, dobra-los e soma-los

const pares = numeros.filter((numero) => numero % 2 === 0);
const dobrados = pares.map((numero) => numero * 2);
const soma = dobrados.reduce((acc, at) => acc + at);

console.log(soma);

let resultado = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((acc, at) => acc + at);

console.log(resultado);
