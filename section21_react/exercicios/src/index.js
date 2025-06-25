import React from "react"
import ReactDOM from "react-dom/client"

import Primeiro from "./componentes/primeiro"

const root = ReactDOM.createRoot(document.getElementById('root'))

// $('<h1>').html('React') -- tipo isso
root.render(<Primeiro />)
