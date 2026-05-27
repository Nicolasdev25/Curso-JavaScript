// Exemplo: retorna a soma de uma lista N numero

let n = Number(prompt("Voce via digitar quantos numero ?"));

let soma = 0;

for (let contador = 0; contador < n; contador++) {
  let numero = Number(prompt("Digite o ", contador + 1, "º número"));

  soma = soma + numero;
}

console.log("A soma dos números digitados é ", soma);
