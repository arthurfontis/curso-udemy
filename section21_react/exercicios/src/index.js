import React  from "react" 

//destructuring {Fragment, Component}
import ReactDOM from "react-dom/client"

import Multi , {BoaNoite} from "./componentes/Multiplos"

//import {BoaNoite, BoaTarde} from "./componentes/Multiplos"
//import BomDia from "./componentes/BomDia"

const root = ReactDOM.createRoot(document.getElementById('root'))

// $('<h1>').html('React') -- tipo isso
root.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <BoaNoite nome="Bia" />
    </div>
)
