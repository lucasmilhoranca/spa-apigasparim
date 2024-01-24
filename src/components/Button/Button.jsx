import { ButtonCa, ButtonChe, ButtonSpace } from "./ButtonStyled";

export function Button({ type, text, cor }) {
    return <ButtonSpace type={type} cor={cor} >{text}</ButtonSpace>
}

export function ButtonCheck({ type, text }) {
    return <ButtonCa type={type}>{text}</ButtonCa>
}

export function ButtonCad({ type, text }) {
    return <ButtonChe type={type} >{text}</ButtonChe>
}