let clientes = Number(prompt("Quantos clientes deseja cadastrar?"));

let total = 0;

let radio = 0;
let tv = 0;
let revista = 0;
let outdoor = 0;

for (let i = 1; i <= clientes; i++) {

  let midia = prompt(
    "Tipo de mídia (radio/tv/revista/outdoor):"
  ).toLowerCase();

  if (midia === "radio") {

    radio++;

    let faixa = prompt("Faixa (AM/FM):").toUpperCase();

    if (faixa === "FM") {
      total += 500;
    } else {
      total += 300;
    }

  } else if (midia === "tv") {

    tv++;

    let horario = Number(prompt("Horário:"));

    if (horario <= 20) {
      total += 1200;
    } else {
      total += 2000;
    }

  } else if (midia === "revista") {

    revista++;
    total += 750;

  } else if (midia === "outdoor") {

    outdoor++;
    total += 1500;
  }
}

console.log(`Valor total arrecadado: R$ ${total.toFixed(2)}\n`);

console.log(`Anuncios de Radio: ${radio}`);
console.log(`Anuncios de TV: ${tv}`);
console.log(`Anuncios de Revista: ${revista}`);
console.log(`Anuncios de Outdoor: ${outdoor}`);