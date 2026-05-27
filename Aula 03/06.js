// Exemplo: Leia uma lsita de N numero e informe qual foi o maior numero digitado.

// Exemplo: retorna a soma de uma lista N numero

let n = Number(prompt("Voce via digitar quantos numero ?"));

let maiorNumero = 0;

for (let contador = 0; contador < n; contador++) {
  let numero = Number(prompt("Digite o ", contador + 1, "º número"));
  
    if (numero > maiorNumero){
        maiorNumero = numero;
    }
}

console.log("o maior numero digitado foi, ", maiorNumero);
