//31
console.log('-------------------------')
function nega(vetor){
    let numerosNegativos = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            numerosNegativos++
        }
    }
    return numerosNegativos
}
vetor = [-1, -2, -4, -6, -11, -5, -7, 2, 5, 6, 1, 5, 22, 5]
console.log(nega(vetor))

//32
console.log('-------------------------')
function media(vet){
    let soma = 0
    for(let i = 0; i < vet.length; i++){
        soma += vet[i]
    }
    return soma / vet.length
}
vet = [1, 2, 3, 4, 5]
console.log(media(vet))

//33
console.log('-------------------------')
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

//34
console.log('-------------------------')
function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('abcdf', 'dcba'))
console.log(verificacaoDeString('abcdf', 'dcbaf'))

//35
console.log('-------------------------')
let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

//36
console.log('-------------------------')
let vetor1 = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor1, multiplicador){
    let vetorResultado1 = []
    vetor1.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador) 
    });

    return vetorResultado1
}

function multiplicaVetorSeMaiorQue5(vetor1, multiplicador){
    let vetorResultado2 = []
    if(multiplicador < 5) return
    vetor1.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador) 
    });

    return vetorResultado2
}

console.log(multiplicaVetor(vetor1, 3))
console.log(multiplicaVetorSeMaiorQue5(vetor1, 11))

//37
console.log('-------------------------')
function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)

//38
console.log('-------------------------')
function acharImpares(inicio = 0, fim = 0){
    if(inicio > fim){
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim
    }
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 1)
            console.log(i)
    }
}
acharImpares(19,3)

//39
console.log('-------------------------')
function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)

//40
console.log('-------------------------')
function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)





