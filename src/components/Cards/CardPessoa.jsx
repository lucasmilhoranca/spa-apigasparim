import { useState } from "react";
import { formatCPF } from "../../utils/formatting";
import * as Dialog from '@radix-ui/react-dialog'
import { X } from "lucide-react";
import { useForm } from "react-hook-form";


export default function CardPessoa(props) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const [status, setStatus] = useState(0)

    async function findStatus() {
        //buscar no axios se tem checkin para esse cpf
        console.log("deu")
    }

    async function onSubmit() {
        console.log(props.cpf)
        //mandar para rota de checkIn ou checkOut
    }

    return (
        <>
            <section className="flex flex-col max-w-full min-h-[200px] shadow-md rounded-md bg-white p-4 m-2">
                {/*<section class="grid grid-cols-2 gap-10 mx-auto my-4 w-80">*/}
                <Dialog.Root>
                    <Dialog.Trigger onClick={findStatus}>
                        <article className="grid grid-cols-2 items-center justify-center gap-4 m-4">
                            <h4>CPF: {formatCPF(props.cpf)}</h4>
                            <h4>NOME: {props.nome.toUpperCase()} {props.sobrenome.toUpperCase()}</h4>
                            <h4>SETOR: {props.setor}</h4>
                            <h4>DEPARTAMENTO: {props.departamento}</h4>
                            <h4>TIPO: {props.tipo}</h4>
                            
                            {props.tipo === "Funcionario" && (
                                <h4>CARGO: {props.cargo}</h4>
                            )}
                            {props.tipo === "Caminhoneiro" && (
                                <div className="grid">
                                    <h4>PLACA: {props.placa}</h4>
                                    <h4>EMPRESA: {props.empresa}</h4>
                                </div>
                            )}
                            {props.tipo === "Visitante" && (
                                <h4>PESSOA RESPONSÁVEL: {props.pessoaResponsavel.toUpperCase()}</h4>
                            )}
                        </article>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] h-[40vh] w-full bg-white rounded-md  flex flex-col outline-none">
                            <Dialog.Close className="absolute right-0 top-0 bg-white p-1.5 text-slate-400 hover:text-slate-300">
                                <X className="size-5" />
                            </Dialog.Close>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col">
                                <div className="flex flex-1 flex-col gap-3 p-5">
                                    <p className="text-xl font-medium text-secondary-orange">
                                        CheckIn
                                    </p>

                                    <h4>CPF: {formatCPF(props.cpf)}</h4>
                                    <h4>Nome: {props.nome.toUpperCase()} {props.sobrenome.toUpperCase()}</h4>
                                    <h4>Setor: {props.setor}</h4>
                                    <h4>Departamento: {props.departamento}</h4>
                                    <h4>Tipo: {props.tipo}</h4>
                                    {props.tipo === "Funcionario" && (
                                        <h4>Cargo: {props.cargo}</h4>
                                    )}
                                    {props.tipo === "Caminhoneiro" && (
                                        <>
                                            <h4>Placa: {props.placa}</h4>
                                            <h4>Empresa: {props.empresa}</h4>
                                        </>
                                    )}
                                    {props.tipo === "Visitante" && (
                                        <h4>Pessoa Responsável: {props.pessoaResponsavel.toUpperCase()}</h4>
                                    )}
                                </div>

                                {status ? (
                                    <button
                                        type="submit"
                                        className="w-full bg-primary-orange-100 py-4 text-center text-sm text-white outline-none font-medium hover:bg-primary-orange-200"
                                    >
                                        Check Out
                                    </button>
                                ) : (

                                    <button
                                        type="submit"
                                        className="w-full bg-primary-green-100 py-4 text-center text-sm text-white outline-none font-medium hover:bg-primary-green-200"
                                    >
                                        Check In
                                    </button>
                                )}

                            </form>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                {/*</section>*/}
            </section>
        </>
    )
}