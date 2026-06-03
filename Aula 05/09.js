//metodo reduce
const numeros = [10, 15, 20, 25, 30];

function somar(acumulador, atual, indice){
    return acumulador + atual;
}


let soma = numeros.reduce(somar);

console.log(soma);
