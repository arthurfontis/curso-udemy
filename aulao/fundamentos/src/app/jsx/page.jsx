import Layout from '../../components/Layout'
import '../../styles/app.css'

export default function Jsx() {

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }


    return (

        <Layout titule="Entendendo o Jsx">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'João', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}