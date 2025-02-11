function compras(t1, t2) {
    const comprarSorv = t1 || t2 // é o ou(||)
    const comprarTv50 = t1 && t2 // é o e (&&)
    const comprarTv32 = t1 != t2
    const manterSaud = !comprarSorv //op unário

    return { comprarSorv, comprarTv50, comprarTv32, manterSaud }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))



//const comprarTv32 = !!(t1 ^ t2) //bitwise xor