
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

if(true)
if(1)
if(' ')
if('Rawndey')
if(-5)
if({})

/* operador lógico de negação 
o operador !, nega uma operação booleana. ou seja, !true é igual a false.
*/

if(!true) //false
if(!1) // false
if(!'') //true
if(!undefined) //true
if(!!' ') //true
if(!!'') //false

/* 
Operadores de comparação, vão sempre retornar um valor booleano
*/

10 > 5 // true
5 > 10 //false
20 < 10 //false
10 <= 10 //true
10 >= 11 //false

/* Operadores de comparação 
O == faz uma comparação não tão restrita e o === faz uma comparação restrita, ou seja, 
o tipo de dado deve ser o mesmo que usamos.
*/

10 == '10' //true
10 == 10 //true
10 === '10' //false
10 === 10 //true
10 != 15 // true
10 != '10' //false
10 !== '10' //true

/* 
operadores lógicos && 
&& compara se uma expressão e a outra é verdadeira.
*/

/* 
Se ambos os valores forem true, ele irá retornar o ultimo valor verificado.
se o valor for false, ele irá retornar o mesmo e não irá continuar a verificar os próximos.
*/
true && true // true
true && false //false
false && true //false
'Gato' && 'Cão' // 'Cão'
(5-5) && (5+5) //0
'Gato' && false //false
(5>= 5) && (3<6) //true

/* 
Operadores lógicos || ou 
|| compara se uma expressão ou, outra é verdadeira,
retorna o primeiro valor true que encontrar.
*/

true || true // true
true || false //true => sempre vai procurar o verdadeiro
false || true // true 
'Gato' || 'Cão' // 'Gato'
(5-5) || (5+5) // 10
'Gato' || false // 'Gato'
(5 >= 5) || (3 < 5) // true
