/* Valores retornados 

Uma função pode retornar qualquer tipo de dado e até outras funções
*/
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
/* Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.*/

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor insira somente números!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
  console.log(idade);
}

console.log(terceiraIdade(60));

/* escopo 
Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele. 
*/
function precisoVisitar(paisesVisitados){
    var totalPaises = 193
    return `ainda faltam ${totalPaises - paisesVisitados} países visitados`
}
console.log(totalPaises); /* Erro de escopo, a variável só vai pegar dentro das chaves, então se deve por fora.*/