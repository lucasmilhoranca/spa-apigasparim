import { CheckBody, CheckContainer } from "../../pages/Check/CheckStyled";
import { formatCPF } from "../../utils/formatting";

export default function CardPessoa() {
    return (
        <>
            <CheckContainer>
                <CheckBody>
                    <h4>CPF: {formatCPF(props.cpf)}</h4>
                    <h4>NOME: {props.nome.toUpperCase()} {props.sobrenome.toUpperCase()}</h4>
                </CheckBody>
                <CheckBody>
                    <h4>SETOR: {props.setor}</h4>
                    <h4>DEP: {props.departamento}</h4>
                    <h4>TIPO: {props.tipo}</h4>
                </CheckBody>
            </CheckContainer>
        </>
    )
}