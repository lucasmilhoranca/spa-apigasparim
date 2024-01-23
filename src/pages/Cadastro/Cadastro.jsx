import { Navbar } from "../../components/Navbar/Navbar";
import { CadBody, CadContainer } from "./CadastroStyled";

export default function Cadastro() {
    return (
        <>
            <Navbar />
            <CadBody>
                <CadContainer>
                    <h1>Hello World</h1>
                </CadContainer>
            </CadBody>
        </>
    )
}