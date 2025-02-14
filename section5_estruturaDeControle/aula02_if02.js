function teste1(num){
    if (num > 7)
            console.log(num)

        console.log('Final') //isso não esta associado ao if, se quiser que associe, tem que colocar tudo entre as chaves, ex: if(num > 7){ console.log(num); console.log('Final')}
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); //if ta vazia

    {
        console.log(num) // não associado ao if
    }
}
teste2(6)
teste2(8)