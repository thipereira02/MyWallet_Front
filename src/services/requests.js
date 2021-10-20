import axios from "axios";

const BASE_URL = "http://localhost:4000";

function login(body){
    return axios.post(`${BASE_URL}/signin`, body);
}

function registration(body){
    return axios.post(`${BASE_URL}/signup`, body)
}

export {login, registration};