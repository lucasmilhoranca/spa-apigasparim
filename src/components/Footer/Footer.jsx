import { Link } from "react-router-dom";
import { Foot, ButtonCad, ButtonCheck, ButtonContainer } from "./FooterStyled.jsx";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext.jsx";

export function FooterBar() {

    const { user } = useContext(UserContext);

    return (
        <>
            <Foot>
                {user ? (
                    <ButtonContainer>
                    <Link to="/check">
                        <ButtonCheck>CHECKIN</ButtonCheck>
                    </Link>

                    <Link to="/cadastro">
                        <ButtonCad>CADASTRAR</ButtonCad>
                    </Link>
                </ButtonContainer>
                ) : <p>NÃO LOGADO</p>}
            </Foot>
        </>
    );
}