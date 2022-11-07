/* 
Funções 
Bloco de código que pode ser executado e reutilizado.
Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado(){
 console.log('Função ativa')
}

areaQuadrado()

/* Chamada de função declaration */


/* se passarmos parametros de uma função, podemos invocar também, exemplo: */
function areaQuadrado2(lado){
    return lado
}
console.log(areaQuadrado2(2)); // irá retornar 2


/* podemos fazer multiplicações, divisões entre outros.*/
function areaQuadradoMultiplicar(lado){
    return lado * lado
}
console.log(areaQuadradoMultiplicar(4))

/*  também dá pra utilizar a função e executar ela simultaneo.*/
function pi(){
    return 3.14;
}
const total = 5 * pi(); //15.7
console.log(total);

/* função de calcular peso IMC
Ao criar uma função, você pode definir parâmetros. 
Ao executar uma função você pode passar argumentos.
*/
function imc(peso, altura) => { 
    const imc = peso/ (altura * altura);
    return imc
}
console.log(imc(80, 1.80));

/* Separar por vírgula cada parâmetro.
você pode definir mais de um parâmetro ou nenhum também.*/


function corFavorita(cor){
    if(cor === 'azul'){
        return "Você gosta do céu"
    }else if(cor === 'verde'){
        return 'Você gosta de mato'
    } else {
        return 'Você não gosta é de porra nenhuma!'
    }
}
corFavorita() /* sem valor ele irá retornar: "você não gosta de porra nenuma"*/