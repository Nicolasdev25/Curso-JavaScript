/*Classificação de IMC
Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e sua altura (em metros). Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:

IMC = peso / (altura * altura)
Após o cálculo, exiba o valor do IMC e, de acordo com o valor obtido, informe a classificação do IMC:

Abaixo de 18.5: Abaixo do peso
Entre 18.5 e 24.9: Peso normal
Entre 25 e 29.9: Sobrepeso
Entre 3.0 e 34.9: Obesidade grau 1
Entre 35 e 39.9: Obesidade grau 2
Acima de 40: Obesidade grau 3
Exemplo de:

Entrada:

Peso (kg): 70
Altura (m): 1.75
Saída:

Seu IMC é: 22.86
Você tem peso normal*/

let peso = prompt("Digite seu peso em kg: ");
let altura = prompt("Digite sua altura em metros: ");
let imc = peso /(altura * altura);

if(imc <= 18.5){
  console.log(`Seu IMC e de: ${imc} \n Você está abaixo do peso`)
}else if(imc >= 18.2 && imc <= 24,9 ){
  console.log(`Seu IMC é: ${imc}`)
}