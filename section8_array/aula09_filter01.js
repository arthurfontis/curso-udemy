const produtos = [
    {nome: 'Notebook', preco: 2499 , fragil:true},
    {nome: 'ipad Pro', preco: 4199 , fragil:true},
    {nome: 'Copo de Vidro', preco: 12.49 , fragil:true},
    {nome: 'Copo de Plástico', preco: 19.99 , fragil:false}
]

console.log(produtos.filter(function(p){ // p representa cade um dos produtos
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))


