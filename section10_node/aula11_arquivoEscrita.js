const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1236.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/aula11_arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})