const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if (x== 5) {
        break
    }
    console.log(`${x} ) ${nums[x]}`)
}
console.log('---------------')
for (y in nums){
    if( y == 5) {
        continue //vai agir no for, quando chegou no indice 5, ele pulou
    }
    console.log(`${y} ) ${nums[y]}`)
}
console.log('--------------')

externo: //não usar rotulos no break e continue
for(a in nums){
    for( b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim')