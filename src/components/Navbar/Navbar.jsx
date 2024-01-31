import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/grupogasparim_logo.jpeg";
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button.jsx";
import { searchSchema } from "../../utils/schemas/searchSchema.jsx";
import { userLogged } from "../../services/userService.js";
import { useEffect } from "react";

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema),
    });
    const navigate = useNavigate();

    function onSearch(data) {
        const { cpf } = data;
        navigate(`/search/${cpf}`);
        reset();
    }

    async function findUserLogged() {
        try{
            const response = await userLogged();
            console.log(response);
        } catch(error){
            console.log(error);
        }
    }

    /*
    useEffect(() => {
        if (Cookies.get("token")) {
            findUserLogged();
        }
    }, []);
    */

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
                    {errors.cpf && <ErrorSpan>{errors.cpf.message}</ErrorSpan>}
                </form>

                <Link to="/">
                    <ImageLogo src={logo} alt="Logo Gasparim" />
                </Link>

                <Link to="/auth">
                    <Button type="button" text="Entrar" cor="#2eb451" />
                </Link>
            </Nav>
            
            <Outlet />
        </>
    );
}

