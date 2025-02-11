function rand({min = 0, max =1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({max:100, min:0}))

console.log(rand({min: 900}))
console.log(rand({}))