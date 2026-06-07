/* Exercício 1 - Gerenciador de Lista de Tarefas
Descrição: Crie uma função chamada gerenciarTarefas que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:

"adicionarInicio": adiciona uma nova tarefa no início da lista.
"adicionarFim": adiciona uma nova tarefa no final da lista.
"removerInicio": remove a primeira tarefa da lista.
"removerFim": remove a última tarefa da lista.
A função deve receber dois parâmetros: o array de tarefas e a ação a ser realizada. Se a ação for "adicionarInicio" ou "adicionarFim", a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada.

Exemplo de uso:

const tarefas = ["Estudar", "Treinar", "Ler"];  

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  

console.log(tarefas);

// Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]*/

function gerenciarTarefas(tarefas, acao, tarefa) {
  switch (acao) {
    case "adicionarInicio":
      tarefas.unshift(tarefa);
      break;

    case "adicionarFim":
      tarefas.push(tarefa);
      break;

    case "removerInicio":
      tarefas.shift(tarefa);
      break;

    case "removerFim":
      tarefas.pop(tarefa);
      break;
  }
}

const tarefas = [];

gerenciarTarefas(tarefas, "adicionarInicio", "Estudar");
console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarFim", "Treinar");
console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarFim", "ler");
console.log(tarefas);

gerenciarTarefas(tarefas, "removerInicio");
console.log(tarefas);
