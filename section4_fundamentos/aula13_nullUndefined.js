let valor; // não inicializada
console.log(valor);
valor = null // ausencia de valor, foi inicializada, mas não possui valor
console.log(valor);
// console.log(valor.toSting()) erro
// console.log(valor2) nem foi declarado

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null //sem preco
console.log(!!produto.preco);
console.log(produto);


//teste
const prod2 = {}
console.log(prod2.preco)
prod2.preco = 2.50
console.log(prod2)
