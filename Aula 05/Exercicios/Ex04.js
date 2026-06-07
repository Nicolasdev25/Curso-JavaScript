/*Exercício 4 - Maior e Menor
Descrição: Crie duas funções chamadas obterMaior e obterMenor que recebem um array de números e retornam o maior e o menor elemento, respectivamente. Use for...of para percorrer o array e informe o maior e o menor numero encontrado.

Exemplo de uso:

const numeros = [-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);

let menor = obterMenor(numeros);

console.log(maior, menor);

// Resultado esperado: 10 -2*/

function obterMaior(numeros) {
  let maiorAtual = numeros[0];

  for (let numero of numeros) {
    if (numero > maiorAtual) {
      maiorAtual = numero;
    }
  }
  return maiorAtual;
}

function obterMenor(numeros) {
  let menorAtual = numeros[0];

  for (let numero of numeros) {
    if (numero < menorAtual) {
      menorAtual = numero;
    }
  }
  return menorAtual;
}

const numeros =[-1, 3, 8, -2, 4, 10];

let maior = obterMaior(numeros);
let menor = obterMenor(numeros);

console.log(maior,menor);
