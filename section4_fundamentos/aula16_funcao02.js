// armazenar uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a+b)
} //parentese são os parametros de entrada

imprimirSoma(2,3)

//armazenar uma funcao arrow em variavel
const soma = (a,b) =>{
    return a + b
}
console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')