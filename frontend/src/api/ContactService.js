import axios from "axios";

const API_URL = 'http://localhost:8080/contacts';

export async function getContacts(page,size){
    return await axios.get(`${API_URL}?page=${page}&size=${size}`)
}

export async function saveContact(contact){
    return await axios.post(API_URL,contact)
}
export async function getContact(id){
    return await axios.get(`${API_URL}/${id}`)
}
export async function uploadPhoto(formData) {
    return await axios.put(`${API_URL}/photo`, formData)
}
export async function deleteContact(id){
    return await axios.delete(`${API_URL}/${id}`)
}
export async function getByPosition(position, page,size){
    return await axios.get(`${API_URL}/position?position=${position}&page=${page}&size=${size}`)
}

export async function getPositions(){
    return await axios.get(`${API_URL}/positions`);
}