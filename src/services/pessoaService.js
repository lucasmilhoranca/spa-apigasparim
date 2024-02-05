import axios from "axios";

const baseURL = "http://localhost:3000"

export function getAllPessoas() {
    const response = axios.get(`${baseURL}/p/all`);
    return response;
}