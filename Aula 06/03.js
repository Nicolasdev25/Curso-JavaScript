const produto = {
  nome: "Smartphone",
  preco: 2000,

  categorias: ["Eletronicos", "Smartphones"],

  fabricante: {
    nome: "TechCorp",
    pais: "EUA",
  },

  aplicarDesconto: function (percentual) {
    return this.preco - this.preco * (percentual / 100);
  },
};

console.log(produto.categorias);
