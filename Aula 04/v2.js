// jogo da adivinhaçao
// mensagem personalizada com base no numero de tentativas
//- 3 tentativas: "Uau! você é um gênio da adivinhação!"
// - Entre 4 e 6 tentativas: "Muito bem! Você foi rapido!"
// - Mais de 6 tentativas: "Conseguiu! Persistencia é tudo"

alert(
  "Bem-vindo(a), ao jogo! Um numero entre 1 e 100 foi sorteado, tente adivinhar",
);

let numeroSorteado = Math.ceil(Math.random() * 100);
let numeroTentativas = 0;

while (true) {
  let numero = Number(prompt("Qual o seu palpite ?"));

  numeroTentativas++;

  if (numero === numeroSorteado) {
    if (numeroTentativas <= 3) {
    } else if (numeroTentativas <= 6) {
      alert(
        `Uau! você é um gênio da adivinhação!\nNúmero de tentativas: ${numeroTentativas}`,
      );
    } else if (numeroTentativas <= 6) {
      alert(
        `Muito bem! Você foi rapido!\nNúmero de tentativas: ${numeroTentativas}`,
      );
    } else {
      alert(
        `Conseguiu! Persistencia é tudo!\nNúmero de tentativas: ${numeroTentativas}`,
      );
    }
    break;
  }

  if (numeroSorteado > numero) {
    alert(`O numero sorteado é MAIOR que ${numero}`);
  } else {
    alert(`O numero sorteado é MENOR que ${numero}`);
  }
}
