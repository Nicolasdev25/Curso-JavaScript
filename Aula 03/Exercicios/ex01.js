/*Crie um programa que permita verificar se várias pessoas podem tirar a Carteira Nacional de Habilitação (CNH).

Inicialmente, o programa deve perguntar quantas pessoas serão analisadas. Em seguida, para cada pessoa, solicite:

Nome
Idade
Considere que uma pessoa pode tirar CNH apenas se tiver 18 anos ou mais.

Ao final de cada análise, exiba uma mensagem informando se a pessoa pode ou não tirar a CNH.

Exemplo de:

Entrada:
Quantas pessoas deseja analisar? 3

Digite o nome da 1ª pessoa: Lucas
Digite a idade de Lucas: 17

Digite o nome da 2ª pessoa: Maria
Digite a idade de Maria: 22

Digite o nome da 3ª pessoa: João
Digite a idade de João: 18
Saída:
Lucas nao pode tirar CNH.

Maria pode tirar CNH.

Joao pode tirar CNH.

Lógica de decisão

se (idade >= 18) {
    escreva(nome, " pode tirar CNH.\n\n")
} 
senao {
    escreva(nome, " nao pode tirar CNH.\n\n")
}*/

let quantidade = Number(prompt("Quantas pessoas deseja analisar?"));

for (let i = 1; i <= quantidade; i++) {

    let nome = prompt(`Digite o nome da ${i}ª pessoa:`);
    let idade = Number(prompt(`Digite a idade de ${nome}:`));

    if (idade >= 18) {
        console.log(`${nome} pode tirar CNH.\n`);
    } else {
        console.log(`${nome} nao pode tirar CNH.\n`);
    }
}