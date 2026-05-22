let n1, n2, soma

n1 = Number(prompt("Digite um numero: "));
n2 = Number(prompt("Digite um numero: "));

soma = n1 + n2

console.log(soma);

// Concatenação

let nome = "lucas", sobrenome = "Marques";

//olá, Lucas Marques! Seja bem-vindo(a)!

//forma 1: let msg = "Olá, " + nome + " " + sobrenome + "! Seja bem-vindo(A)!";

let msg = `olá, ${nome} ${sobrenome}! Seja bem-vindo(a)`