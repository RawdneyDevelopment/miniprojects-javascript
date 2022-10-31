
/* ele não irá executar o else pois o if existe, */
var possuiGraduacao = false
var possuiDoutorado = false
if (possuiGraduacao) {
    console.log('Possuo graduação');
}
else {
    console.log('não possuo graduação');
}



if (possuiGraduacao) {
    console.log('É verdadeiro');
}
else if (possuiDoutorado) {
    console.log('Possui doutorado')

}
else {
    console.log('Não possui nada');
}
/* Sempre em condicionais ele verifica se é boolean, então sempre é uma verificação entre True e false*/


/* Existem valores que retornem true e outros que retornaram false quando verificados em uma expressão booleana.*/

/* Falsy */

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') /* ou "" ou `` */


/* todo resto é truthy */