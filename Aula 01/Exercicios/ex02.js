/*Descrição: Crie um programa que peça ao usuário o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.

Exemplo de:

Entrada:

Informe o valor da compra: 120
Saída:

Valor original: R$ 120.00
Desconto aplicado: R$ 12.00
Valor final: R$ 108.00 */

let valorCompra = prompt("Informe o valor da compra:");
let desconto = valorCompra * 0.10;
let valorFinal = valorCompra - desconto;
let desconto2 = valorCompra * 0.05;
let valorFinal2 = valorCompra - desconto2;

if (valorCompra > 100) {
  console.log(`Valor original: R$ ${valorCompra}`);
  console.log(`Desconto aplicado: R$ ${desconto}`);
  console.log(`Valor final: R$ ${valorFinal}`);
}else {
  console.log(`Valor original: R$ ${valorCompra}`);
  console.log(`Desconto aplicado: R$ ${desconto2}`);
  console.log(`Valor final: R$ ${valorFinal2}`);
}