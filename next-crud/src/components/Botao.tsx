interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    const cores: Record<string, string> = {
        green: 'from-green-400 to-green-700',
        blue: 'from-blue-400 to-blue-700',
        gray: 'from-gray-400 to-gray-700',
    }
    return (
        <button onClick={props.onClick} className={`
             bg-gradient-to-r ${cores[cor]}
            text-white px-4 py-2 rounded-md
            cursor-pointer
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}