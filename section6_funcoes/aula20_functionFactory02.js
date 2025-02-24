function criarProduto(nome, preco){
    return{
        nome, 
        preco,
        desconto : 0.1
    }
}
console.log(criarProduto('Bola', 6.2))
console.log(criarProduto('Celular', 2400.90))
console.log(criarProduto('Ipad', 1199.49))