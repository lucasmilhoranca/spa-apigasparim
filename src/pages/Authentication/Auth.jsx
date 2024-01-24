import { useForm } from "react-hook-form";
import { ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { ButtonCad, ButtonCheck } from "../../components/Button/Button";

const signSchema = z.object({
    usuario: z.string(),
    password: z.string()
})

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
                    <Input type="password" placeholder="Senha" name="password" register={register} />
                    <ButtonContainer>
                        <ButtonCheck type="submit" text="Entrar"></ButtonCheck>
                        <ButtonCad type="submit" text="Cadastrar"></ButtonCad>
                    </ButtonContainer>
                </form>
            </Section>
        </AuthContainer>
    );
}