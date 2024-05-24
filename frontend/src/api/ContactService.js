import axios from "axios";

const API_URL = 'http://localhost:8080/contacts';

export async function getContacts(page,size){
    return await axios.get(`${API_URL}?page=${page}&size=${size}`)
}