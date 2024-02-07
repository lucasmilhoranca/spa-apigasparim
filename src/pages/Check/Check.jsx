import { useEffect, useState } from "react";
import { getAllPessoas } from "../../services/pessoaService";
import { CheckBody, CheckContainer } from "./CheckStyled";
import { formatCPF } from "../../utils/formatting";
import CardPessoa from "../../components/Cards/CardPessoa";

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
            <section className="pt-4 w-full grid grid-cols-2 items-center">
                {pessoas.map((item) => {
                    return <CardPessoa
                        key={item.id} 
                        cpf={item.cpf}
                        nome={item.nome} 
                        sobrenome={item.sobrenome} 
                        setor={item.setor} 
                        departamento={item.departamento}
                        tipo={item.tipo} 
                        cargo={item.cargo} 
                        placa={item.placa} 
                        empresa={item.empresa} 
                        pessoaResponsavel={item.pessoaResponsavel}/>
                })}
                <CardPessoa nome={"Lucas"} sobrenome={"Gomes"} cpf={"12345678910"} setor={"SETOR"} departamento={"DEPARTAMENTO"} tipo={"Funcionário"} cargo={"CARGO"} placa={""} empresa={""} responsavel={""} />
                <CardPessoa nome={"Lucas"} sobrenome={"Gomes"} cpf={"12345678910"} setor={"SETOR"} departamento={"DEPARTAMENTO"} tipo={"Caminhoneiro"} cargo={""} placa={"XPTO1234"} empresa={"XPTO"} responsavel={""} />
                <CardPessoa nome={"Lucas"} sobrenome={"Gomes"} cpf={"12345678910"} setor={"SETOR"} departamento={"DEPARTAMENTO"} tipo={"Visitante"} cargo={""} placa={""} empresa={""} pessoaResponsavel={"Lucas"} />
            </section>
        </>
    )
}