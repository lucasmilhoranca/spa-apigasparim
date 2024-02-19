import axios from "axios";

const baseURL = "http://localhost:3000"

export function getAllChecks() {
    const response = axios.get(`${baseURL}/control`);

    return response;
}

export function searchChecks(cpf) {
    const response = axios.get(`${baseURL}/control/${cpf}`);

    return response;
}

export function searchStatus(cpf) {
    const response = axios.get(`${baseURL}/control/${cpf}/status`);
    
    return response;
}

export function checkIn(cpf) {
    const response = axios.post(`${baseURL}/control/checkin`, cpf);

    return response;
}

export function checkOut(cpf) {
    const response = axios.patch(`${baseURL}/control/checkout`, cpf);

    return response;
}