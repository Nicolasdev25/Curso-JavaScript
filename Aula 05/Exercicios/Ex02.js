/*Exercício 2 - Manipulando Notas de um Aluno
Descrição: Crie uma função chamada calcularMedia que recebe um array de notas de um aluno e retorna a média das três melhores notas. Ordene o array de forma decrescente usando sort(), pegue as três primeiras notas usando slice(), calcule e retorne a média dessas notas.

Exemplo de uso:

const notas = [5, 8, 9, 3, 10, 7]; 

let mediaTresMelhores = calcularMedia(notas);  

console.log(mediaTresMelhores);

// Resultado esperado: média das três maiores notas (10, 9 e 8) => 9.0*/

function calcularMedia(notas) {
  notas.sort(function (nota1, nota2) {
    return nota2 - nota1;
  });

  let tresMelhores = notas.slice(0, 3);

  let soma = tresMelhores[0] + tresMelhores[1] + tresMelhores[2];

  return soma / 3;
}

const notasdoAluno = [6, 9, 5, 8, 10];
let resultado = calcularMedia(notasdoAluno);

console.log(resultado);
