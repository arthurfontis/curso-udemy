const moduloA = require('../../aula01_moduloa')
console.log(moduloA.ola)

const c = require('./pastac') //vai procurar dentro da pasta o index
console.log(c.ola2)


/*const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
*/