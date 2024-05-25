import './App.css';
import {getContacts} from "./api/ContactService";
import {useEffect, useState} from "react";
import ContactList from "./components/ContactList";

function App() {
    const [data, setData] = useState([])

    const getAllContacts = async (page = 0, size = 10) => {
        try {
            const {data} = await getContacts(page, size);
            setData(data)
        } catch (error) {
            console.error("Failed to fetch contacts", error)
        }
    }
    useEffect(() => {
        getAllContacts()
    }, []);

    return (
        <main className='main'>
            <div className='container'>
                <ContactList data={data}/>
            </div>
        </main>
    );
}
export default App;
