import { useForm } from "react-hook-form";
import { GreenButton, OrangeButton } from "../../components/Button/Button";
import { ButtonContainer } from "../../components/Button/ButtonStyled";
import { Input } from "../../components/Input/Input";
import { CadBody, CadContainer } from "./CadastroStyled";
import { CustomSelection } from "../../components/Selection/Selection";
import { pessoaSchema, funcionarioSchema, caminhoneiroSchema, visitanteSchema } from "../../utils/schemas/cadastroSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaMap = {
    "Funcionário": funcionarioSchema,
    "Caminhoneiro": caminhoneiroSchema,
    "Visitante": visitanteSchema,
}

const tipoCamposMap = {
    "Funcionário": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "cargo"],
    "Caminhoneiro": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "placa", "empresa"],
    "Visitante": ["cpf", "nome", "sobrenome", "setor", "departamento", "tipo", "pessoaResponsavel"],
};

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
                        <Input type="text" placeholder="Nome" name="nome" register={register} />
                        <Input type="text" placeholder="Sobrenome" name="sobrenome" register={register} />
                        <CustomSelection options={["Sementes", "Nutrição"]} placeholder="Setor" name="setor" register={register} />
                        <Input type="text" placeholder="Departamento" name="departamento" register={register} />
                        <CustomSelection options={["Funcionário", "Caminhoneiro", "Visitante"]} placeholder="Tipo" name="tipo" register={register} />

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
                            <OrangeButton type="button" onClick={() => reset()} text="Cancelar" />
                            <GreenButton type="submit" text="Cadastrar"></GreenButton>
                        </ButtonContainer>
                    </form>
                </CadBody>
            </CadContainer>
        </>
    )
}