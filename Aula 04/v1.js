// jogo da Adivinhação
// - sortear um numero do intervalo (1 e 100)
//- permite varios palpites ate o certo
//- contar o número de tentativAs

alert(
  "Bem-vindo(a), ao jogo! Um numero entre 1 e 100 foi sorteado, tente adivinhar",
);

let numeroSorteado = Math.ceil(Math.random() * 100);
let numeroTentativas = 0;

while (true) {
  let numero = Number(prompt("Qual o seu palpite ?"));

  numeroTentativas++;

  if (numero === numeroSorteado) {
    alert(`Você acertou em ${numeroTentativas} tentativas`);
    break;
  }

  if (numeroSorteado > numero) {
    alert(`O numero sorteado é MAIOR que ${numero}`);
  } else {
    alert(`O numero sorteado é MENOR que ${numero}`);
  }
}
