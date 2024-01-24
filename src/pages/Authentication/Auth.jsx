import { ButtonCad, ButtonCheck, ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthStyled";

export function Auth() {
    return (
        <AuthContainer>
            <Section type="signup">
                <h2>Entrar</h2>
                <form>
                    <Input type="text" placeholder="Usuário" name="usuario" />
                    <Input type="password" placeholder="Senha" name="password" />
                    <ButtonContainer>
                        <ButtonCheck type="submit">Entrar</ButtonCheck>
                        <ButtonCad type="submit">Cadastrar</ButtonCad>
                    </ButtonContainer>
                </form>
            </Section>
        </AuthContainer>
    );
}