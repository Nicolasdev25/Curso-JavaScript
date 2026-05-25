/*Descrição: Peça ao usuário sua idade usando prompt. Com base na idade, defina uma variável permitido que será true se a idade for maior ou igual a 18, e false caso contrário. Mostre com alert uma mensagem do tipo: "Entrada permitida" ou "Entrada negada".

Exemplo de:

Entrada:

Informe sua idade: 17
Saída:

Entrada negada */

let idade = prompt("Digite sua idade");

let permitida = idade >= 18;
let naoPermitida = idade < 18;

if (idade >= 18){
  console.log(alert("Entrada Permitida"));
}else {
  console.log(alert("Entrada Negada"))
}