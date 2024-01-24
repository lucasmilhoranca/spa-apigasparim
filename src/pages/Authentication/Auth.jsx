import { useForm } from "react-hook-form";
import { ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { zodResolver } from "@hookform/resolvers/zod"
import { ButtonCad, ButtonCheck } from "../../components/Button/Button";
import { signSchema } from "../../utils/schemas/signSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";

export function Auth() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(signSchema),
    });

    function inHandleSubmit(data) {
        console.log(data)+"entrar";
        console.log("entrar")
    }

    function onHandleSubmit(data) {
        console.log(data)
        console.log("cadastro")
    }

    function handleFormSubmit(data, event) {

        const clickedButton = event.nativeEvent.submitter;
        const buttonText = clickedButton.textContent;

        buttonText === "Entrar" ? inHandleSubmit(data) : onHandleSubmit(data)
    }

    return (
        <AuthContainer>
            <Section type="signup">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input type="text" placeholder="Usuário" name="usuario" register={register} />
                    {errors.usuario && <ErrorSpan>{errors.usuario.message}</ErrorSpan>}
                    <Input type="password" placeholder="Senha" name="password" register={register} />
                    {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
                    <ButtonContainer>
                        <ButtonCheck type="submit" text="Entrar"></ButtonCheck>
                        <ButtonCad type="submit" text="Cadastrar"></ButtonCad>
                    </ButtonContainer>
                </form>
            </Section>
        </AuthContainer>
    );
}