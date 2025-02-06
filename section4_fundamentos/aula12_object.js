const prod1 = {}; // representa um objeto e [] array
prod1.nome  = 'Celular Ultra Mega';
prod1.preco = 4988.90;
prod1["Desconto Legal"] = 0.4; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90 ,
    obj: { // obj dentro de prod2
        nome: '...' ,
        preco: '...',
        obj:{ // obj dentro de obj, ou seja, ainda continua sendo nome único
            bla: 1
        }
    }
}
console.log(prod2)