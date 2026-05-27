// exemplo: recebe 2 numeros (parametros) e retorna a soma deles.

function somar(num1, num2) {
  //declaração da função
  return num1 + num2;
}

let soma = somar(2, 3); //chamada da função

console.log("A soma é", soma);


// função com parametro sem retorno

function mensagemPersonalizada(nome){
    console.log(`Olá, ${nome}. Seja bem-vindo(a)`);
}

mesagemPersonalizada("Lucas");

// função 