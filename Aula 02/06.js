let filtro = "romance";

//todos, romance, ação, ficção

switch (filtro) {
  case "todos":
    console.log("Listando todos os livros...");
    break;
  case "romance":
    console.log("Listando os livros de romance...");
    break;
  case "ação":
    console.log("Listando livros de Ação...");
    break;
  case "ficção":
    console.log("Listando livros de Ficção...");
    break;
  default:
    console.log("o filtro nao existe");
}
