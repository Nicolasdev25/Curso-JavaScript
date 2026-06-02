let ph;

do {
  ph = Number(prompt("Informe o pH (-1 para encerrar):"));

  if (ph === -1) {
    break;
  }

  if (ph < 7) {
    console.log("Substância Ácida");
  } else if (ph > 7) {
    console.log("Substância Básica");
  } else {
    console.log("Substância Neutra");
  }

} while (true);