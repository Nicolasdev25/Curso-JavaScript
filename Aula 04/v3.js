// permitir varios jogos até que nao tenha mais jogadores
// informar o jogador com a melhor pontuação (exibir o nome e a pontuação)

let melhorJogador = "";
let melhorPontuacao = Infinity;

while (true) {
  alert(
    "Bem-vindo(a), ao jogo! Um numero entre 1 e 100 foi sorteado, tente adivinhar",
  );

  let numeroSorteado = Math.ceil(Math.random() * 100);

  let numeroTentativas = 0;

  let nomeJogador = prompt("Qual o seu nome ?");

  while (true) {
    let numero = Number(prompt("Qual o seu palpite ?"));

    if (numero < 1 || numero > 100) {
      alert("Informe um numero entre 1 e 100.  Esse palpite não contou!");
    }

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
      if (numeroTentativas < melhorPontuacao) {
        melhorPontuacao = numeroTentativas;
        melhorJogador = nomeJogador;
      }
      break;
    }

    if (numeroSorteado > numero) {
      alert(`O numero sorteado é MAIOR que ${numero}`);
    } else {
      alert(`O numero sorteado é MENOR que ${numero}`);
    }
  }

  let novoJogo = confirm("Deseja iniciar um novo jogo ?");

  if (!novoJogo) {
    alert(
      `O melhor jogador foi ${melhorJogador} com ${melhorPontuacao} tentativas`,
    );
    break;
  }
}
