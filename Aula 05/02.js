//caracteristicas dos arrays no JS:

// É dinâmico
const numeros = [1, 2, 3];

console.log(numeros);

numeros[3] = 4;
console.log(numeros);

//pode conter "buracos" os espaços vazios ficam como undefined

numeros[6] = 5;
console.log(numeros);

// pode conter valores de diferentes tipos
const valores = [1, 1.6, "Ana", [], {}, () => {}]
console.log(valores);