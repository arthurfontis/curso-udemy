import React, { Component } from "react";

export default class Saudacao extends Component {

    state = {
        tipo: "Fala",
        nome: "Pedro"
    }

    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this) //garantir this fixo
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }
    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome.." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}
