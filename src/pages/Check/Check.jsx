import { useEffect, useState } from "react";
import { getAllPessoas } from "../../services/pessoaService";
import { CheckBody, CheckContainer } from "./CheckStyled";
import { formatCPF } from "../../utils/formatting";

export default function Check() {

    const [pessoas, setPessoas] = useState([]);

    async function getPessoas() {
        const response = await getAllPessoas();
        setPessoas(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getPessoas();
    }, []);

    return (
        <>
            
        </>
    )
}