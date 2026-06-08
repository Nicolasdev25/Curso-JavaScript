/* Exercício 1 - Cadastro de Usuário
Descrição: Crie uma função chamada criarUsuário que receba nome, idade e e-mail como parâmetros e retorne um objeto representando o produto com essas propriedades.

Exemplo de uso:

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");

console.log(usuario);
// Resultado esperado: {nome: Jorge, idade: 17, email: jorginho@hotmail.com}
*/

function criarUsuario (nome, idade, email){
  return{
    nome: nome,
    idade: idade,
    email: email
  };
};

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com")

console.log(usuario);