import { Link } from "react-router-dom";
import { Foot, ButtonCad, ButtonCheck, ButtonContainer } from "./FooterStyled.jsx";

export function FooterBar() {
    return (
        <>
            <Foot>
                <ButtonContainer>
                    <Link to="/check">
                        <ButtonCheck>CHECKIN</ButtonCheck>
                    </Link>

                    <Link to="/cadastro">
                        <ButtonCad>CADASTRAR</ButtonCad>
                    </Link>
                </ButtonContainer>
            </Foot>
        </>
    );
}