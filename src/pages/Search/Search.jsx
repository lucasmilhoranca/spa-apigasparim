import { useParams } from "react-router-dom"
import { searchChecks } from "../../services/controleService";
import { useEffect, useState } from "react";

export function Search() {
    const { cpf } = useParams()
    const [allChecks, setChecks] = useState([]);

    async function search() {
        try {

            const checks = await searchChecks(cpf);
            setChecks(checks.data);

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
            <h1>{cpf}</h1>
        </>
    )
} 