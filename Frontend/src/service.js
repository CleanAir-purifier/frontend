import axios from "axios";

const apiUrl = "https://clean-air-api.herokuapp.com/"

const api = axios.create({baseURL: apiUrl});

export const getDevices = async (purifierId) => {
    return api.get(`purifier/${purifierId}`);
}
