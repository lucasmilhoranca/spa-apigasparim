import logo from "../../images/grupogasparim_logo.jpeg";
import { Foot, ButtonCad, ButtonCheck, ButtonContainer } from "./FooterStyled.jsx";

export function FooterBar() {
    return (
        <>
            <Foot>
                <ButtonContainer>
                    <ButtonCheck>CHECKIN</ButtonCheck>
                    <ButtonCad>CADASTRAR</ButtonCad>
                </ButtonContainer>
            </Foot>
        </>
    );
}

