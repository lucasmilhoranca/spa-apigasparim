import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000"

export function createUser(data) {
    const response = axios.post(`${baseURL}/user/signup`, data);
    return response;
}

export function loginUser(data) {
    const response = axios.post(`${baseURL}/auth`, data);
    return response;
}

export function userLogged() {
    const response = axios.get(`${baseURL}/auth`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    });
    return response;
}