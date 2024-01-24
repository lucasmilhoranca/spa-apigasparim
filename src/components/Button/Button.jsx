import { ButtonSpace } from "./ButtonStyled";

export function Button({ type, text, cor }) {
    return <ButtonSpace type={type} cor={cor} >{text}</ButtonSpace>
}