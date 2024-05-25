import './App.css';
import {getContacts} from "./api/ContactService";
import {useEffect, useState} from "react";
import ContactList from "./components/ContactList";

function App() {
    const [data, setData] = useState([])

    const getAllContacts = async (page = 0, size = 10) => {
        const {data} = await getContacts(page, size);
        console.log(data)
        setData(data)
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
