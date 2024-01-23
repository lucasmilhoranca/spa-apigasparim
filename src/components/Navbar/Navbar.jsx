import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/grupogasparim_logo.jpeg";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled.jsx";
import { useForm } from "react-hook-form";

export function Navbar() {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    function onSearch(data) {
        const { cpf } = data;
        navigate(`/search/${cpf}`);
        reset();
    }

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                        <input {...register("cpf")} type="text" placeholder="Pesquise por um CPF" />
                    </InputSpace>
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Gasparim" />
                </Link>

                <Button>Entrar</Button>
            </Nav>
            <Outlet />
        </>
    );
}

