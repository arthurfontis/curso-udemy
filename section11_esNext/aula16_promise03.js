const lodash = require('lodash')

function teste (min, max){
    return new Promise (resolve => {
        const aleatorio = lodash.random(min,max)
        resolve(aleatorio)
    })
}

teste(1,60)
.then(num => num * 10)
.then(numX10 => `O número gerado foi ${numX10}`)
.then(console.log)
