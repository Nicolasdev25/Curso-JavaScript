/* Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula:

IMC = peso / (altura * altura)
Depois, utilize a função confirm() para exibir uma mensagem de confirmação com os dados inseridos.

Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: "Nome, seu IMC é X", onde Nome é o nome informado e X é o IMC calculado.

Caso o usuário cancele, exiba a mensagem: "Você saiu do programa."

Exemplo de:

Entrada:

Nome: João
Peso: 80
Altura: 1.75
Confirmação:

Seus Dados:
Nome: João
Peso: 80 kg
Altura: 1.75 m
Deseja continuar?
Saída:

João, seu IMC é 26.12*/

let nome = prompt("Digite seu nome: ");
let peso = prompt("Digite seu peso em KG: ");
let altura = prompt("Digite sua altura em metros: ");
let imc = peso / (altura * altura);
let confirmacao = confirm(
  `Seus Dados: \n Nome: ${nome} \n Peso: ${peso} kg \n Altura: ${altura} m`,
);

let decisao = confirm("Deseja continuar?");

if (decisao === true) {
  console.log(alert(`${nome}, seu IMC é:  ${imc.toFixed(2)}`));
} else {
  console.log(alert("Você saiu do programa"));
}
