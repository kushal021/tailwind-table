import axios from "axios";

const API = axios.create({
  baseURL: `https://cat-fact.herokuapp.com`,
  timeout: 10 * 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const getSpecies = async () => API.get("/facts");
