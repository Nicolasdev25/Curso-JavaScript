const produto = {
    nome: "Celular",
    preco: 2000,
    estoque: 50,
}

//keys();

const chaves = Object.keys(produto);
console.log(chaves);

// values()
const valores = Object.values(produto);
console.log(valores);

// entries()
const chaveValores = Object.entries(produto);
console.log(chaveValores);

// for..in
for (let chave in produto){
    console.log(`${chave}: ${produto[chave]}`);
}