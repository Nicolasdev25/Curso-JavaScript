//metodo: map() usado para uma transformçao. sempre vai ter o memsmo tamanho do original
const numeros = [10, 15, 20, 25, 30];

function dobra(numero) {
  return numero * 2;
}

const numerosDobrados = numeros.map(dobrar);

console.log(numerosDobrados);

const numerosMetade = numeros.map((numero) => numero / 2);

console.log(numerosMetade);

const numerosImpares = numeros.filter((numero) => numero % 2 ===1); //retorno implicito usado quando  a função tem um return
console.log(numerosImpares);