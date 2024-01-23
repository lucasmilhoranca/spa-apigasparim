import axios from "axios";

const baseURL = "http://localhost:3000"

export function getAllChecks() {
    const response = axios.get(`${baseURL}/control`); //async
    return response;
}

export function searchChecks(cpf) {
    const response = axios.get(`${baseURL}/control/${cpf}`); //async
    return response;
}