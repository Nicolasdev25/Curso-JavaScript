/*Exercício 2 - Total de Vendas da Loja
Descrição: Uma loja deseja calcular o valor total arrecadado com as compras realizadas durante o dia.

Faça um programa que pergunte quantos clientes foram atendidos. Em seguida, para cada cliente, solicite o valor da sua compra e acumule esses valores.

Ao final, exiba o valor total arrecadado pela loja.

Exemplo de:

Entrada:
Quantos clientes foram atendidos? 3

Digite o valor da compra do 1° cliente: 150.50
Digite o valor da compra do 2° cliente: 89.90
Digite o valor da compra do 3° cliente: 210.00
Saída:
O total arrecadado pela loja foi: R$ 450.40
Dica: Utilize uma variável acumuladora iniciada com zero para armazenar a soma dos valores das compras conforme elas forem sendo informadas.*/

let clientes = Number(prompt("Quanto clientes foram atendidos?"))
let total = 0;

for (let i = 1; i<= clientes; i++){
  let compra = Number(prompt(`digite o valor da compra do ${i}º cliente: `));
  total = total + compra;
}
console.log(`o total arrecadado pelo loja foi R$ ${total}`);