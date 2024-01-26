import { useForm } from "react-hook-form";
import { GreenButton, OrangeButton } from "../../components/Button/Button";
import { ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { CadBody, CadContainer } from "./CadastroStyled";
import { CustomSelection } from "../../components/Selection/Selection";
import { pessoaSchema } from "../../utils/schemas/cadastroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";

const tipoCamposMap = {
    "Funcionário": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "cargo"],
    "Caminhoneiro": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "placa", "empresa"],
    "Visitante": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "pessoaResponsavel"],
};

const tiposPermitidos = ["Funcionário", "Caminhoneiro", "Visitante"];

const setoresPermitidos = ["Sementes", "Nutrição"];

const departamentosPermitidos = [
    "Almoxarifado",
    "Cobrança",
    "Compras",
    "Contabilidade",
    "Desenvolvimento",
    "Diretoria",
    "Fábrica",
    "Financeiro",
    "Labortório",
    "Logística",
    "Marketing",
    "Produção",
    "RH",
    "Vendas",
];

export default function Cadastro() {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
        resolver: zodResolver(pessoaSchema),
    });

    const tipoSelecionado = watch('tipo');

    const onSubmit = (data) => {
        const camposRelevantes = tipoCamposMap[tipoSelecionado] || [];

        const dadosFiltrados = Object.fromEntries(Object.entries(data).filter(([campo]) => camposRelevantes.includes(campo)));

        console.log(dadosFiltrados);
    };

    return (
        <>
            <CadContainer>
                <CadBody>
                    <h2>Cadastro de Pessoa</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="text" placeholder="CPF" name="cpf" register={register} />
                        {errors.cpf && <ErrorSpan>{errors.cpf.message}</ErrorSpan>}

                        <Input type="text" placeholder="Nome" name="nome" register={register} />
                        {errors.nome && <ErrorSpan>{errors.nome.message}</ErrorSpan>}

                        <Input type="text" placeholder="Sobrenome" name="sobrenome" register={register} />
                        {errors.sobrenome && <ErrorSpan>{errors.sobrenome.message}</ErrorSpan>}

                        <CustomSelection options={setoresPermitidos} placeholder="Setor" name="setor" register={register} />
                        {errors.setor && <ErrorSpan>{errors.setor.message}</ErrorSpan>}

                        <CustomSelection options={tiposPermitidos} placeholder="Tipo" name="tipo" register={register} />
                        {errors.tipo && <ErrorSpan>{errors.tipo.message}</ErrorSpan>}

                        <CustomSelection options={tipoSelecionado === "Caminhoneiro" ? ["Logística", "Fábrica"] : departamentosPermitidos} placeholder="Departamento" name="departamento" register={register} />
                        {errors.departamento && <ErrorSpan>{errors.departamento.message}</ErrorSpan>}

                        {tipoSelecionado === "Funcionário" && (
                            <Input type="text" placeholder="Cargo" name="cargo" register={register} />
                        )}
                        {tipoSelecionado === "Caminhoneiro" && (
                            <>
                                <Input type="text" placeholder="Placa" name="placa" register={register} />
                                <Input type="text" placeholder="Empresa" name="empresa" register={register} />
                            </>
                        )}
                        {tipoSelecionado === "Visitante" && (
                            <Input type="text" placeholder="Pessoa Responsável" name="pessoaResponsavel" register={register} />
                        )}

                        <ButtonContainer>
                            <Link to="/">
                                <OrangeButton type="button" onClick={() => reset()} text="Cancelar" />
                            </Link>
                            <GreenButton type="submit" text="Cadastrar"></GreenButton>
                        </ButtonContainer>
                    </form>
                </CadBody>
            </CadContainer>
        </>
    )
}