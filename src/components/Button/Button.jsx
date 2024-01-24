import { ButtonSpace, GreenButton, OrangeButton } from "./ButtonStyled";

export function Button({ type, text, cor }) {
    return <ButtonSpace type={type} cor={cor} >{text}</ButtonSpace>
}

export function ButtonCheck({ type, text }) {
    return <GreenButton type={type}>{text}</GreenButton>
}

export function ButtonCad({ type, text }) {
    return <OrangeButton type={type} >{text}</OrangeButton>
}