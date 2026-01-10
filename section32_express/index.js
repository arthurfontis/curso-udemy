const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

app.use(saudacao('Fontis'))

// Os verbos são usados após o app. (no lugar do use)

app.use((req,res, next) => { 
    console.log("Antes...")
    next()
}) 

// função middleware recebe req, res e next



app.get('/opa', (req, res, next) => {

    console.log("Durante...")
    res.json({
        data: [
            { id: 7, name: "Ana", position: 1 },
            { id: 34, name: "Bia", position: 2 },
            { id: 73, name: "Carlos", position: 3 }
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
    })

    next()

    // res.json([
    //     {id: 7, name: "Ana", position:1},
    //     {id: 34, name: "Bia", position:2},
    //     {id: 73, name: "Carlos", position:3}
    // ])


    // res.json({
    //     name: "iPad 32Gb",
    //     price: 1899.00,
    //     discount: 0.12
    // })


    // res.send('<h1>Estou bem!</h1> <br> <h2> Tipo Html </h2>')
})

app.use((req,res) => {
    console.log("Depois...")
    // next(), já que é a última não precisa do next
}) 

app.listen(3000, () => {
    console.log("Backend executando...")
})