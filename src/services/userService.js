import axios from "axios";

const baseURL = "http://localhost:3000"

export function createUser(user) {
    const response = axios.post(`${baseURL}/user/signup`, user);
    return response;
}

export function loginUser(user) {
    const response = axios.post(`${baseURL}/auth`, user);
    return response;
}