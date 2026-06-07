/* Exercício 5 - Exibindo Nomes Formatados
Descrição: Crie uma função chamada exibirNomes que receba um array com nomes e use forEach para exibir no console cada nome com a frase: "Bem-vindo, [nome]!"

Exemplo de uso:

const nomes = ['Lucas', 'Marina', 'João'];

exibirNomes(nomes);

// Resultado esperado:
// Bem-vindo, Lucas!
// Bem-vindo, Marina!
// Bem-vindo, João!*/

function exibirNomes(nomes) {
  nomes.forEach(function (nome) {
    console.log(`Bem-vindo, ${nome}!`);
  });
}

const nomes = ["Lucas", "Mariana", "Joao"];

exibirNomes(nomes);
