function Carro(velocidadeMaxima = 200, delta = 5){ //dentro dessa função posso instanciar novos objetos
    
    //atributo privado, para ser privado só usar alguma variavel(const, let, var)
    let velocidadeAtual = 0
    //metodo público //para deixar público usar o this
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new Carro //usando os parametros ja definidos, na function da linha 1
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)