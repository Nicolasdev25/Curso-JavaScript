// forEach((callback))

const numeros = [10, 20, 30, 40, 50];

//function dobrar(numero, indice, numeros) {
  //console.log(indice, numero * 2);
  //console.log(numero[indice]*2);


//for (let i = 0; i < numeros.lenght; i++) {
  //dobrar(numeros[i], i, numeros);


numeros.forEach((numero, indice) => {
  console.log(`${indice}: ${numero * 2}`);
});
