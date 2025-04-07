function funcionarouNao(valor, chanceErro){
   return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro){
        reject('Ocorreu um erro')
    } else {
        resolve(valor)
    }
   })
}

funcionarouNao('Testando' , 0.5)
.then(console.log)
.catch(console.log)
.then(() => console.log('Fim!'))