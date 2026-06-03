//Iteráveis

const numeros = [10, 20, 30, 40, 50, 60, 70];

//for

for(let indice  = 0; indice < 5 /*numeros.length*/; indice ++){
    console.log(numeros[indice]);
}

//for..of , equivalente ao condigo acima

for(let numero of numeros){
    console.log(numeros);
}

//for..in
for(let indice in numeros){
    console.log(indice[indice])
}