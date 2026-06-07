/* Exercício 8 - Total de Vendas
Descrição: Crie uma função chamada calcularTotalVendas que recebe um array com as vendas de uma loja e retorna o total das vendas. Use o reduce para obter a soma total das vendas.

Exemplo de uso:

const vendas = [150, 200, 100, 50];  

let totalVendas = calcularTotalVendas(vendas);  

console.log(totalVendas);

// Resultado esperado: 500
*/

function calcularTotalVendas(vendas) {
  return vendas.reduce((acumulador, vendaAtual) => {
    return acumulador + vendaAtual;
  }, 0);
}

const vendas = [150, 200, 100, 50];

let totalVendas = calcularTotalVendas(vendas);

console.log(totalVendas);
