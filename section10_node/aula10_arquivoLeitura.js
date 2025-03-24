const fs = require('fs') 

const caminho = __dirname + '/aula10_arquivo.json'
//sincrono... arqv pequeno

const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

//assincrono arqv grande
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) // transformar em obj, pq é uma string
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./aula10_arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})