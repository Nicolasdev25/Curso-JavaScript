let nota = prompt("Digite sua nota: ");
let faltas = prompt("Digite a quantidade de faltas: ");

if (nota && faltas) {
  if (nota >= 9 && nota <= 10 && faltas < 10) {
    console.log("Aprovado com louvor");
  } else if (nota >= 7 && nota < 9 && faltas < 10) {
    console.log("Aprovado");
  } else if (nota >= 4 && nota < 7 && faltas < 10) {
    console.log("Recuperação");
  } else if (nota >= 0 && nota < 4 && faltas < 10) {
    console.log("Reprovado");
  } else {
    console.log("Nota invalida");
  }
} else {
  console.log("Digite os valores");
}
