//new object - função que cria um novo objeto

const carro = new Object(); //{}

carro.marca = "Fiat";
carro.ano = 2024;
carro.preco = 50000;

// class e constructor

class produto {
  constructor(nome, preco) {
    this.nome = nome; //this usa para relacionar
    this.preco = this.preco;
  }
}

const produto = new produto("Smartphone", 1500);

console.log(produto);
