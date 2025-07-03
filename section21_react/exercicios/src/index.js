import React from "react"

//destructuring {Fragment, Component}
import ReactDOM from "react-dom/client"

import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"


//import Saudacao from "./componentes/Saudacao"

//import Multi , {BoaNoite} from "./componentes/Multiplos"

//import {BoaNoite, BoaTarde} from "./componentes/Multiplos"
//import BomDia from "./componentes/BomDia"

const root = ReactDOM.createRoot(document.getElementById('root'))

// $('<h1>').html('React') -- tipo isso
root.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
)
