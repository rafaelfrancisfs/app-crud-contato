import axios from 'axios'

const baseURL = 'http://localhost:3001/contact'

async function getAllContacts() {
    const response = await axios.get(baseURL);
    const contacts = response.data.map((contact) => {
        return { ...contact, };
    });
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    return contacts;
}

async function insertContact(contact) {
    const response = await axios.post(baseURL, contact);
    return response.data;
}

async function updateContact(contact) {
    const response = await axios.patch(baseURL, contact);
    return response.data;
}

async function deleteContact(id) {
    const response = await axios.delete(`${baseURL}/${id}`);
    return response.data;
}




export { getAllContacts, insertContact, updateContact, deleteContact }