/*Descrição: Crie um programa que leia números inteiros da entrada até que o número digitado seja 0. Para cada número, o programa deve verificar se ele é positivo ou negativo. Ao final, o programa deve informar a quantidade de números positivos e a quantidade de números negativos digitados.

Exemplo de:

Entrada:
3
-2
5
-1
0
Saída:
Quantidade de números positivos: 2
Quantidade de números negativos: 2*/



let positivos = 0;
let negativos = 0;

let numero = Number(prompt("Digite um numero:"));

while (numero !== 0) {

    if (numero > 0) {
        positivos++;
    } else {
        negativos++;
    }

    numero = Number(prompt("Digite um numero:"));
}

console.log(`Quantidade de numeros positivos: ${positivos}`);
console.log(`Quantidade de numeros negativos: ${negativos}`);