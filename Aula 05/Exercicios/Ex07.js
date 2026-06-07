/*Exercício 7 - Filtrando Devedores
Descrição: Crie uma função chamada filtrarDevedores que recebe um array de dívidas e o valor máximo da dívida e retorna um novo array contendo apenas as dívidas que ultrapasam esse valor. Use filter para selecionar apenas os devedores.

Exemplo de uso:

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];  

const devedores = filtrarDevedores(dividas, 80);  

console.log(devedores);

// Resultado esperado: [95.90, 180.50, 105.99]*/

function filtrarDevedores(dividas, valorMaximo) {
  
  const dividasAltas = dividas.filter(function (divida) {
    
    return divida > valorMaximo;
  });

 
  return dividasAltas;
}


const dividas = [95.9, 180.5, 22.99, 105.99, 30.5];

const devedores = filtrarDevedores(dividas, 80);

console.log(devedores);

