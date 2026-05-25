/*Descrição: Crie um programa que simule um estoque. Peça ao usuário: quantidade atual no estoque (number) e a quantidade que deseja remover (number). Mostre no console: se a quantidade for válida (não negativa), mostre "Estoque atualizado: X". Caso contrário, mostre "Operação inválida: quantidade insuficiente no estoque".

Exemplo de:

Entrada:

Estoque: 30
Remover: 20
Saída:

Estoque atualizado: 10 */

let estoque = 30;
let remover = prompt("Digite a quantidade que deseja remover do estoque: ");

if (estoque > remover) {
  console.log(
    `Estoque: ${estoque},\n Remover: ${remover},\n Estoque Atualizado: \n ${estoque - remover}`,
  );
} else {
  console.log(alert("Operação inválida: quantidade insuficiente no estoque"));
}
