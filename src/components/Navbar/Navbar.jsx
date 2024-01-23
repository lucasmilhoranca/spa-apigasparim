import { Outlet } from "react-router-dom";
import logo from "../../images/grupogasparim_logo.jpeg";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled.jsx";

export function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Pesquise por um CPF" />
                </InputSpace>

                <ImageLogo src={logo} alt="Logo Gasparim" />

                <Button>Entrar</Button>
            </Nav>
            <Outlet/>
        </>
    );
}

