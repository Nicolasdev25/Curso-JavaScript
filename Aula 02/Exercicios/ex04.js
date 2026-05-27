/*Descrição: Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

1 para soma
2 para subtração
3 para multiplicação
4 para divisão
Use o comando switch para escolher a operação e, ao final, exiba o resultado da operação escolhida.

Exemplo de:

Entrada:

Digite o primeiro número: 10
Digite o segundo número: 5

--- Operações ---
1 - soma 
2 - subtração 
3 - multiplicação
4 - divisão
-----------------

Escolha uma operação: 1
Saída:

Resultado da soma: 15*/
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

console.log(`
--- Operações ---
1 - soma
2 - subtração
3 - multiplicação
4 - divisão
-----------------
`);

let operacao = Number(prompt("Escolha uma operação:"));

switch (operacao) {
  case 1:
    console.log(`Resultado da soma: ${numero1 + numero2}`);
    break;

  case 2:
    console.log(`Resultado da subtração: ${numero1 - numero2}`);
    break;

  case 3:
    console.log(`Resultado da multiplicação: ${numero1 * numero2}`);
    break;

  case 4:
    if (numero2 === 0) {
      console.log("Não é possível dividir por zero");
    } else {
      console.log(`Resultado da divisão: ${numero1 / numero2}`);
    }
    break;

  default:
    console.log("Operação inválida");
}