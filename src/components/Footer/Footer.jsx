import { Link } from "react-router-dom";
import { Foot, ButtonCad, ButtonCheck, ButtonContainer } from "./FooterStyled.jsx";

export function FooterBar() {
    return (
        <>
            <Foot>
                <ButtonContainer>
                    <ButtonCheck>CHECKIN</ButtonCheck>
                    <Link to="/cadastro">
                        <ButtonCad>CADASTRAR</ButtonCad>
                    </Link>
                </ButtonContainer>
            </Foot>
        </>
    );
}