Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this)) // this[i] = valor do atual elemento, i = o indice e this = o array completo
    }
    return newArray
}

const carrinho =[
    '{"nome": "Borracha" , "preco" : 3.45}',
    '{"nome": "Caderno" , "preco" : 13.90}',
    '{"nome": "Kit de Lapis" , "preco" : 41.22}',
    '{"nome": "Caneta" , "preco" : 7.50}',
]

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado)