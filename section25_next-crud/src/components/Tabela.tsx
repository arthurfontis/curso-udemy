'use client';

import { IconeEdicao, IconeLixo } from "./icones";

// Tipo literal simples para cliente
type ClienteSimples = {
    id: string;
    nome: string;
    idade: number;
};

interface TabelaProps {
    clientes: ClienteSimples[];
    clienteSelecionado?: (cliente: ClienteSimples) => void;
    clienteExcluido?: (cliente: ClienteSimples) => void;
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : null}
            </tr>
        );
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => (
            <tr
                key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
            >
                <td className="text-left p-4">{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                {exibirAcoes ? renderizarAcoes(cliente) : null}
            </tr>
        ));
    }

    function renderizarAcoes(cliente: ClienteSimples) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado && (
                    <button
                        onClick={() => props.clienteSelecionado?.(cliente)}
                        className={`
              flex justify-center items-center
              text-green-600 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
                    >
                        {IconeEdicao}
                    </button>
                )}
                {props.clienteExcluido && (
                    <button
                        onClick={() => props.clienteExcluido?.(cliente)}
                        className={`
              flex justify-center items-center
              text-red-500 rounded-full p-2 m-1
              hover:bg-purple-50
            `}
                    >
                        {IconeLixo}
                    </button>
                )}
            </td>
        );
    }

    return (
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead
                className={`
          text-gray-100
          bg-gradient-to-r from-purple-500 to-purple-800
        `}
            >
                {renderizarCabecalho()}
            </thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    );
}