/*Descrição: Use o confirm() para perguntar ao usuário se ele deseja excluir sua conta. Se confirmar, use alert() para mostrar: "Conta excluída com sucesso". Caso contrário, mostre: "Ação cancelada pelo usuário".

Exemplo de:

Entrada:

(confirm): Clica em "OK"
Saída:

Conta excluída com sucesso. */

let resposta = confirm("Deseja excluir sua conta? ");

if (resposta === true){
  console.log(alert("Conta excluida com sucesso"));
}else{
  console.log(alert("Ação cancelada pelo usuário"));
}