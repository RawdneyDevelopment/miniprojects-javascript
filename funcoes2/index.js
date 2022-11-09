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

console.log(terceiraIdade(60))
