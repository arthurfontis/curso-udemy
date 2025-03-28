//Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico = lexico1.bind({})
lexico1()
lexico1()

//Parâmetros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')
log(undefined)
log(null)

//operador rest = os (...)
function total(...numeros){
    let total = numeros.reduce(function(acumulador, atual){
        return acumulador + atual
    })
    return console.log(total)
}
total(2,3,4,5)