const funcs = []

for (var i = 0; i < 10; i++){ //var não tem escopo de bloco
    funcs.push(function(){
    console.log(i)
    })
}

funcs[2]()
funcs[9]()
funcs[8]()