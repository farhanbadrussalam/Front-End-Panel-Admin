import axios from "axios";

const { NODE_ENV, REACT_APP_API_PROD, REACT_APP_API_DEV } = process.env;

const token = localStorage.getItem("token");

const config = {
  baseURL: NODE_ENV === "production" ? REACT_APP_API_PROD : REACT_APP_API_DEV,
  timeout: 1000,
  headers: { Authorization: token },
};

export const api = axios.create(config);
