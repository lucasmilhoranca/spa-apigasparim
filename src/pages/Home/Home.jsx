import { Card } from "../../components/Cards/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { getAllChecks } from "../../services/controleService.js";
import { HomeBody } from "./HomeStyled.jsx";
import { useState, useEffect } from "react";

export default function Home() {

    const [allChecks, setChecks] = useState([]);

    async function findAllChecks() {
        const response = await getAllChecks();
        setChecks(response.data.results);
    }

    useEffect(() => {
        findAllChecks();
    }, []);

    //findAllChecks();

    return (
        <>
            <Navbar />
            <HomeBody>
                {allChecks.map((item) => {
                    return <Card key={item.id} cpf={item.cpf} nome={item.nome} sobrenome={item.sobrenome} data={item.data} horarioEntrada={item.horarioEntrada} horarioSaida={item.horarioSaida} status={item.status} />;
                })}
            </HomeBody>

        </>
    );
}