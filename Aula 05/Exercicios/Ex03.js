/*Exercício 3 - Somando números
Descrição: Crie uma função chamada somarNumeros que recebe um array e retorna a soma dos números que são divisíveis por 2 e 3. Use for...in para percorrer o array.

Exemplo de uso:

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

let soma = somarNumeros(numeros);

console.log(soma);

// Resultado esperado: 42 (6 + 24 + 12) */

function somarNumeros(numeros) {
  let somaTotal = 0;

  for (let indice in numeros) {
    let numero = numeros[indice];

    if (numero % 2 === 0 && numero % 3 === 0) {
      somaTotal += numero;
    }
  }
  return somaTotal;
}

const listaDeNumeros = [4, 6, 9, 12, 15, 18, 5];
const resultado = somarNumeros(listaDeNumeros);

console.log(resultado);
