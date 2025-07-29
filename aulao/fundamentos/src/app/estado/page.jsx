"use client";
import styles from "../../styles/Estado.module.css"
import Layout from "../../components/Layout";
import { useState } from "react";

export default function Estado() {
    const [numero, setNumero] = useState(0)


    function incrementar() {
        setNumero(numero + 1)
    }
    
    return (
        <Layout titule="Componente com Estado">
            <div>{numero}</div>
            <button className={styles.btn} onClick={incrementar}>incrementar</button>
        </Layout>
    )
}