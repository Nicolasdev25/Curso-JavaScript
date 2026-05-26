/*Descrição: Crie um programa que solicite ao usuário sua idade e, com base na idade fornecida, imprima uma mensagem indicando a faixa etária correspondente:

Idade maior ou igual a 65: Você é um idoso.
Idade maior ou igual a 18: Você é um adulto.
Idade maior ou igual a 13: Você é um adolescente.
Senão a saída deve ser: Você é uma criança.
Exemplo de:

Entrada:

Qual a sua idade ? 30
Saída:

Você é um adulto. */

let idade = prompt("Digite sua Idade: ");

if (idade >= 65) {
  console.log("Você é um idoso");
} else if (idade >= 18) {
  console.log("Voce é um adulto");
} else if (idade >= 13) {
  console.log("Você é um adolescente");
} else {
  console.log("Voc é uma criança");
}
