import axios from "axios";

const BASE_URL = "https://back-mywallet.herokuapp.com";

function setConfig(token) {
	return {headers: {Authorization: `Bearer ${token}`}};
}

function login(body){
	return axios.post(`${BASE_URL}/signin`, body);
}

function registration(body){
	return axios.post(`${BASE_URL}/signup`, body);
}

function getUserFinances(token) {
	return axios.get(`${BASE_URL}/finances`, setConfig(token));
}

function addNewFinance(body, token) {
	return axios.post(`${BASE_URL}/finances`, body, setConfig(token));
}

function finishSession(token) {
	return axios.post(`${BASE_URL}/logout`, [], setConfig(token));
}

export {login, registration, getUserFinances, addNewFinance, finishSession};