'use client';

import Layout from "../../../components/Layout"
import { useParams } from 'next/navigation'

export default function ClienteProCodigo() {
    const params = useParams()

    return (
        <Layout titule="Navegação Dinâmica">
            <span>Código = {params.codigo}</span>
        </Layout>
    )
}