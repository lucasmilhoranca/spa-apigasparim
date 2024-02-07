import { CheckBody, CheckContainer } from "../../pages/Check/CheckStyled";
import { formatCPF } from "../../utils/formatting";

export default function CardPessoa(props) {
    return (
        <>
            <section className="flex flex-col max-w-full shadow-md rounded-md bg-white p-4 m-2">
                {/*<section class="grid grid-cols-2 gap-10 mx-auto my-4 w-80">*/}
                    <article className="grid grid-cols-2 items-center justify-center gap-4 m-4">
                        <h4>CPF: {formatCPF(props.cpf)}</h4>
                        <h4>NOME: {props.nome.toUpperCase()} {props.sobrenome.toUpperCase()}</h4>
                        <h4>SETOR: {props.setor}</h4>
                        <h4>DEPARTAMENTO: {props.departamento}</h4>
                        <h4>TIPO: {props.tipo}</h4>

                        {props.tipo === "Funcionario" && (
                            <h4>CARGO: {props.cargo}</h4>
                        )}
                        {props.tipo === "Caminhoneiro" && (
                            <div className="grid">
                                <h4>PLACA: {props.placa}</h4>
                                <h4>EMPRESA: {props.empresa}</h4>
                            </div>
                        )}
                        {props.tipo === "Visitante" && (
                            <h4>PESSOA RESPONSÁVEL: {props.pessoaResponsavel.toUpperCase()}</h4>
                        )}
                    </article>
                {/*</section>*/}
            </section>
        </>
    )
}