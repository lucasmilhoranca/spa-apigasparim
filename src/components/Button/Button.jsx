import { ButtonSpace, OrangeB, GreenB } from "./ButtonStyled";

export function Button({ type, text, cor }) {
    return <ButtonSpace type={type} cor={cor} >{text}</ButtonSpace>
}

export function GreenButton({ type, text }) {
    return <GreenB type={type}>{text}</GreenB>
}

export function OrangeButton({ type, text }) {
    return <OrangeB type={type} >{text}</OrangeB>
}