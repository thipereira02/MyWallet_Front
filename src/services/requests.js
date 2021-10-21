import axios from "axios";

const BASE_URL = "http://localhost:4000";

function setConfig(token) {
    return {headers: {Authorization: `Bearer ${token}`}}
}

function login(body){
    return axios.post(`${BASE_URL}/signin`, body);
}

function registration(body){
    return axios.post(`${BASE_URL}/signup`, body)
}

function getUserFinances(token) {
    return axios.get(`${BASE_URL}/finances`, setConfig(token))
}

export {login, registration, getUserFinances};