import { useParams } from "react-router-dom"
import { searchChecks } from "../../services/controleService";
import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Card";
import { FooterBar } from "../../components/Footer/Footer";
import { ContainerResults, SearchBody, TextResults } from "./SearchStyled";
import { formatCPF } from "../../utils/formatting";

export function Search() {
    const { cpf } = useParams()
    const [allChecks, setChecks] = useState([]);

    async function search() {
        try {

            const checks = await searchChecks(cpf);
            setChecks(checks.data.results);

        } catch (error) {
            console.log(error);
            setChecks([]);
        }
    }

    useEffect(() => {
        search();
    }, [cpf])

    return (
        <>
            <ContainerResults>
                <TextResults>
                    <span>
                        {allChecks.length ? `Encontramos ${allChecks.length} ${allChecks.length > 1 ? "resultados" : "resultado"} para:` : "Nenhum resultado encontrado"}
                    </span>
                    <h3>{formatCPF(cpf)}</h3>
                </TextResults>

                <SearchBody>
                    {allChecks.map((item) => {
                        return <Card key={item.id} cpf={item.cpf} nome={item.nome} sobrenome={item.sobrenome} data={item.data} horarioEntrada={item.horarioEntrada} horarioSaida={item.horarioSaida} status={item.status} />;
                    })}
                </SearchBody>
                <FooterBar />
            </ContainerResults>
        </>
    );
} 