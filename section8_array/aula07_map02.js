const carrinho =[
    '{"nome": "Borracha" , "preco" : 3.45}',
    '{"nome": "Caderno" , "preco" : 13.90}',
    '{"nome": "Kit de Lapis" , "preco" : 41.22}',
    '{"nome": "Caneta" , "preco" : 7.50}',
]

let transf = carrinho.map(item =>{
    let produto = JSON.parse(item)
    return produto.preco
})


console.log(transf)

/* 
FORMA DO VIDEO

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)

*/