const lodash = require('lodash')

function teste (min, max, tempo){
    return new Promise (resolve => {
        setTimeout(() => {
            const aleatorio = lodash.random(min,max);
            resolve(aleatorio);
        }, tempo)
            
        });
};



function gerarVariosNumeros(){
    return Promise.all([
        teste(1,60,4000),
        teste(1,60,500),
        teste(1,60,3000),
        teste(1,60,1000),
        teste(1,60,100),
        teste(1,60,1500),
    ])
}

console.time('promise')
gerarVariosNumeros()
.then(numeros => console.log(numeros))
.then(() =>{
    console.timeLog('promise')
    console.timeEnd('promise')
})
