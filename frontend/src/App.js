import './App.css';
import {getContacts} from "./api/ContactService";
import {useState} from "react";

function App() {
    const [data, setData] = useState([])

    const getAllContacts = async (page = 0, size = 10) => {
        const {data} = await getContacts(page, size);
        console.log(data)
        setData(data)
    }
    return (
        <div>
            <h1>so hello :)</h1>
            <button onClick={() => getAllContacts()}>get all contacts</button>
            <ul>
                {data.content && data.content.map((contact, index) => (
                    <li key={index}>{contact.name}, {contact.phone}, {contact.position}, {contact.email}, {contact.photo_url}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
