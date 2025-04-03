// callback aninhadas
/* setTimeout(() => {
    console.log('Executando callback')

    setTimeout(() => {
        console.log('Executando callback')
        setTimeout(() => {
            console.log('Executando callback')
        }, 2000);
    }, 2000);
}, 2000);

*/

//com promise
function esperarPor(tempo = 2000){
    return new Promise (function(resolve){
        setTimeout(() => {
            console.log('Executando Promise')
            resolve()
        }, tempo);
    })
}

esperarPor()
.then( () => esperarPor())
.then( () => esperarPor())