//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a+b);
}
imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 2); // ele ignora o resto, só pego os 2 primeiros

//funcao com retorno

function soma(a, b = 1){ //o b é um valor padrao quando não atribuido
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())