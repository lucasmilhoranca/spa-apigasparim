import { useParams } from "react-router-dom"

export function Search() {
    const { cpf } = useParams()
    return (
        <>
            <h1>{cpf}</h1>
        </>
    )
} 