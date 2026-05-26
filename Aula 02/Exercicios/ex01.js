/*Descrição: Crie um programa que leia o ano de nascimento do usuário e o ano atual. Com base nesses dados, calcule a idade e exiba uma mensagem informando:

Quantos anos o usuário completa no ano atual
E se ele pode ou não tirar a habilitação, considerando que a idade mínima é 18 anos.
Exemplo de:

Entrada:

Digite o ano de nascimento: 2006
Digite o ano atual: 2025
Saída:

Você completa 19 anos em 2025 e poderá tirar a habilitação.
Outro exemplo:

Entrada:

Digite o ano de nascimento: 2010
Digite o ano atual: 2025
Saída:

Você completa 15 anos em 2025 e ainda não poderá tirar a habilitação.
*/

let anoNascimento = prompt("Digite o ano de nascimento: ");
let anoAtual = prompt("Digite o ano atual: ");
let idade = anoAtual - anoNascimento;

if (idade >= 18){
  console.log(alert(`Você completarar ${idade} anos em 2026 e poderá tirar a habilitação`));

}else {
  console.log (alert(`Você completa ${idade} anos em 2026 e ainda não poderá tirar a habilitação.`))
}