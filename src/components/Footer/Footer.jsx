import logo from "../../images/grupogasparim_logo.jpeg";
import { Foot, ButtonCad, ButtonCheck } from "./FooterStyled.jsx";

export function FooterBar() {
    return (
        <>
            <Foot>
                <div>
                    <ButtonCheck>CHECKIN</ButtonCheck>
                    <ButtonCad>CADASTRAR</ButtonCad>
                </div>
            </Foot>
        </>
    );
}

