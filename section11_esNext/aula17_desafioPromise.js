const fs = require('fs')

const p = new Promise ((resolve, reject)=>{
    const caminho = __dirname + '/dados.txt'

    const conteudo = fs.readFile(caminho, "utf-8" , (err, conteudo)=>{
        if(err){
            reject(err)
        } else {
            resolve(conteudo.toString())
        }
    })


})

p
.then(conteudo => conteudo.split('\n'))
.then(linhas => linhas.join(','))
.then(conteudo => `O valor final é: ${conteudo}`)
.then(console.log)
.catch(err => console.error("erro ao ler o arquivo" , err))


