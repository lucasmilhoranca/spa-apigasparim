import axios from "axios";

const baseURL = "http://localhost:3000"

export function createUser(data) {
    const response = axios.post(`${baseURL}/user/signup`, data);
    return response;
}

export function loginUser(data) {
    const response = axios.post(`${baseURL}/auth`, data);
    return response;
}