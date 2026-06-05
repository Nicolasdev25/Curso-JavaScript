const produtos = [
  {
    id: 1,
    nome: "Café",
    preco: 9.9,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 25,
  },
  {
    id: 2,
    nome: "Leite",
    preco: 5.5,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 40,
  },
  {
    id: 3,
    nome: "Pão",
    preco: 7.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
  {
    id: 4,
    nome: "Queijo",
    preco: 22.9,
    categoria: "Frios",
    emEstoque: true,
    estoque: 12,
  },
  {
    id: 5,
    nome: "Bolo de Chocolate",
    preco: 15.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
];

// 1. Listar apenas o nome e os preço de cada produto (forEach) - funçao de callback
produtos.forEach((produto) => {
  console.log(`${produto.nome} : ${produto.preco}`);
});
//2. Criar um Array com o nome de cada produto (map)
let nomes = produtos.map((produto) => produto.nome);
console.log(nomes);
//3.  filtrar os produtos que estao em estoque (filter)
const disponiveis = produtos.filter((produto) => produto.emEstoque);
console.log(disponiveis);
// 4. calcular o preço total de todos os produtos (reduce)
const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.estoque,
  0,
);
console.log(total);
// 5. Encontrar um produto especifico
const produto = produtos.find((produto) => produto.nome == "Café");
console.log(produto);
