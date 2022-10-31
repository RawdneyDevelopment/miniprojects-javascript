/* 
Switch cases

Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o Case.
Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break;
para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

*/

var corFavorita = 'Verde'
switch (corFavorita) {
    case 'Azul':
        console.log('esta é uma cor Azul igual o céu')
        break;
    case 'Verde':
        console.log('esta é uma cor verde igual as florestas')
        break;
    default:
        console.log('isso não é porra nenhuma, então feche os olhos')
}

/* exercícios
Verifique se a sua idade é maior do que a de algum parente
Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor' */
const minhaIdade = 28
const idadePrimo = 32
if (minhaIdade > idadePrimo) {
    console.log('é maior')
} else if (minhaIdade === idadePrimo) {
    console.log('É igual')
}
else {
    console.log('é menor')
}

/* qual valor é retornado na seguinte expressão?*/
const expressão = (5 - 2) && (5 - ' ') && (5 - ' ') && (5 - 2);

/* verifique se as seguintes variáveis são truthy ou falsy */

const nome = 'André'
const idade = 28
const possuiDoutorado = false
const empregoFuturo;
const dinheiroNaConta = 0
/* resposta */ console.log(
    !!nome,
    !!idade,
    !!possuiDoutorado,
    !!empregoFuturo,
    !!dinheiroNaConta)


/* Compare o total de habitantes do Brasil com Chine (valor em milhoes)*/
const brasil = 207
const china = 1340

if (brasil > china) {
    console.log('Brasil é maior que a china');
} else {
    console.log('Brasil não é maior que a china!');
}


/* o que irá aparecer no console? */
if(('Gato' === 'gato') || (5>2)){
    console.log('Gato' && 'Cão')
}
else {
    console.log('Falso');
}