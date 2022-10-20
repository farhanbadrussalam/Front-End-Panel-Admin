import axios from "axios";

const token = localStorage.getItem("token");

const configDevelopment = {
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 2000,
  headers: { Authorization: token },
};

const configProduction = {
  baseURL: "domain",
  timeout: 1000,
  headers: { Authorization: token },
};

export const api = axios.create(configDevelopment);
