import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/grupogasparim_logo.jpeg";
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../Button/Button.jsx";

const searchSchema = z.object({
    cpf: z.string()
        .min(10, "O CPF deve ter 11 dígitos")
        .max(11, "O CPF deve ter 11 dígitos")
        .refine(value => !/^\s*$/.test(value), { message: "O CPF não pode ser vazio" })
        .refine(value => /^[0-9]+$/.test(value), { message: "O CPF deve conter apenas números" }),
})

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

                <Link to="/auth">
                    <Button type="button" text="Entrar" cor="#2eb451" />
                </Link>
            </Nav>
            {errors.cpf && <ErrorSpan>{errors.cpf.message}</ErrorSpan>}
            <Outlet />
        </>
    );
}

