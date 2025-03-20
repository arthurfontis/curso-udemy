const contadorA = require('./aula06_instanciaUnica')
const contadorB = require('./aula06_instanciaUnica')

const contadorC = require('./aula06_instanciaNova')()
const contadorD = require('./aula06_instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor , contadorC.valor)