function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => { resolve() }, tempo);
    })
}

/* esperarPor(2000)
    .then(() => console.log('Executando Promise 1'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 2'))
    .then(esperarPor)
    .then(() => console.log('Executando Promise 3'))
*/ 

function retornarValor (){
    return new Promise (resolve => {
        setTimeout(() => { resolve(10)}, 5000);
    })
}

async function executar(){ //sem o await vão ser executados ao mesmo tempo, com o await ele espera um ser executado para executar outro
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await 1 ${valor}`)
    await esperarPor(1500)
    console.log(`Async/Await 2 ${valor + 1}`)
    await esperarPor(1500)
    console.log(`Async/Await 3 ${valor + 2}`)

    return valor + 3
}
async function excVerdade (){
    const valor =  await executar()
    console.log(valor)
}

excVerdade()
