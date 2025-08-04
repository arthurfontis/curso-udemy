import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {

        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    const clientesPuros = clientes.map(c => ({
        id: c.id,
        nome: c.nome,
        idade: c.idade
    }))

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }
    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }
    function novoCliente() {
        setCliente(Cliente.vazio)
        exibirFormulario()
    }

    return {
        clientesPuros,
        clientes,
        cliente,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}