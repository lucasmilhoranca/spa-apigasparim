import { useForm } from "react-hook-form";
import { ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";
import { zodResolver } from "@hookform/resolvers/zod"
import { GreenButton, OrangeButton } from "../../components/Button/Button";
import { signSchema } from "../../utils/schemas/signSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { createUser, loginUser } from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function Auth() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(signSchema),
    });

    const navigate = useNavigate();

    async function inHandleSubmit(data) {
        try {
            const response = await loginUser(data);

            Cookies.set("token", response.data.token, { expires: 1 });
            navigate("/");
        } catch (error) {
            console.log(error);
        } 
    }

    async function onHandleSubmit(data) {
        try {
            const response = await createUser(data);
            
            reset();
        } catch (error) {
            console.log(error);
        }
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
                        <GreenButton type="submit" text="Entrar"></GreenButton>
                        <OrangeButton type="submit" text="Cadastrar"></OrangeButton>
                    </ButtonContainer>
                </form>
            </Section>
        </AuthContainer>
    );
}