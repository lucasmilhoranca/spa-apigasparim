import { formatCPF, formatDate, formatTime } from "../../utils/formatting";
import { CardBody, CardContainer, StatusContainer, GreenCircle, RedCircle } from "./CardStyle";

export function Card(props) {
    

    return (
        <CardContainer>
            <CardBody>
                <p>CPF: {formatCPF(props.cpf)}</p>
                <p>NOME: {props.nome} {props.sobrenome}</p>
                <h3>Data: {formatDate(props.data)}</h3>
            </CardBody>
            <CardBody>
                <h2>Entrada: {formatTime(props.horarioEntrada)}</h2>
                <h2>Saída: {formatTime(props.horarioSaida)}</h2>
                
            </CardBody>
            <StatusContainer style={{ marginLeft: 10 }}>
                    <label>{props.status === 1 ? "In" : "Out"}&nbsp;</label>
                    <span>{props.status === 1 ? <GreenCircle /> : <RedCircle />}</span>
            </StatusContainer>
        </CardContainer>
    );

}