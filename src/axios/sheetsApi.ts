import axios from "axios";

export const sheetsApi = axios.create({
  baseURL:"https://sheets.googleapis.com/v4/spreadsheets",
})
