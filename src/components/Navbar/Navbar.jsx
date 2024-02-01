import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/grupogasparim_logo.jpeg";
import { ErrorSpan, ImageLogo, InputSpace, Nav, UserLoggedSpace } from "./NavbarStyled.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button.jsx";
import { searchSchema } from "../../utils/schemas/searchSchema.jsx";
import { userLogged } from "../../services/userService.js";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../Context/userContext.jsx";

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(searchSchema),
    });
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    function onSearch(data) {
        const { cpf } = data;
        navigate(`/search/${cpf}`);
        reset();
    }

    async function findUserLogged() {
        try {
            const response = await userLogged();
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function signout() {
        Cookies.remove("token");
        setUser(undefined);
        navigate("/");
    }

    useEffect(() => {
        if (Cookies.get("token")) {
            findUserLogged();
        }
    }, []);

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

                {user ? (
                    <UserLoggedSpace>
                        <h2>{user.usuario}</h2>
                        <i className="bi bi-box-arrow-right" onClick={signout}></i>
                    </UserLoggedSpace>

                ) : (
                    <Link to="/auth">
                        <Button type="button" text="Entrar" cor="#2eb451" />
                    </Link>
                )}

            </Nav>

            <Outlet />
        </>
    );
}

