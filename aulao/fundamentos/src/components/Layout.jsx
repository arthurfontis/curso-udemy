import styles from '../styles/Layout.module.css'
import Link from "next/link"
export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titule ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}