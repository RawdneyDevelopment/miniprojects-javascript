/*
Objetos
Cria um objeto é simples. basta definirmos uma variável e iniciar a definição
do seu valor com chaves {}. más e se precisarmos criar um novo objeto?
com as mesmas características do anterior?
 */


const carro = {
  marca: 'Marca',
  preco: 0
}

const honda = carro
honda.marca = 'Honda';
honda.preco = 40000

const fiat = carro
fiat.marca = 'Fiat'
fiat.preco = 400000
