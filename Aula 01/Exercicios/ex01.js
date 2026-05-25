/*Crie um programa que solicite ao usuário os seguintes dados: nome, idade , altura, gênero e estudante.

Exemplo de:

Entrada:

Qual é o seu nome ? Ana
Qual é sua idade ? 25
Qual a sua altura ? 1.67
Qual o seu gênero ? F
É estudante ? verdadeiro
Saída:

Bem-vindo(a), Ana! 
Seu Perfil
Nome: Ana
Idade: 25
Altura: 1.67
Gênero: F
Estudante: verdadeiro
*/

let nome = prompt("Qual é o seu nome ?");
let idade = prompt("Qual é sua idade ?");
let altura = prompt("Qual a sua altura ?");
let genero = prompt("Qual o seu gênero ?");
let estudante = prompt("É estudante ?");

console.log(`Bem-vindo(a), ${nome}!`);
console.log("Seu Perfil");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Altura: ${altura}`);
console.log(`Gênero: ${genero}`);
console.log(`Estudante: ${estudante}`);