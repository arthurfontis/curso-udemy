class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}