/*Exercício 6 - Transformando um Array de Preços
Descrição: Crie uma função chamada converterMoeda que recebe um array de preços em dólares e retorna um novo array com os valores convertidos para reais (cotação: 1 dólar = 5 reais). Use map para multiplicar cada valor por 5 e retorne o novo array com os preços convertidos.

Exemplo de uso:

const precosDolares = [10, 20, 30]; 

precoReais = converterMoeda(precosDolares); 

console.log(precoReais);

// Resultado esperado: [50, 100, 150]*/

function converterMoeda(precosDolares) {
  const precoReais = precosDolares.map(function (preco) {
    return preco * 5;
  });

  return precoReais;
}

const precosDolares = [10, 20, 30];

const precoReais = converterMoeda(precosDolares);

console.log(precoReais);
