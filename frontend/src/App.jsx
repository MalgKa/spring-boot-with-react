import './App.css';
import {getContacts} from "./api/ContactService";
import {useState} from "react";
import ContactList from "./components/ContactList";

function App() {
    const [data, setData] = useState([])

    const getAllContacts = async (page = 0, size = 10) => {
        const {data} = await getContacts(page, size);
        console.log(data)
        setData(data)
    }
    return (
        <main className='main'>
            <div className='container'>
                <button onClick={() => getAllContacts()}>get all contacts</button>
                <ContactList data={data}/>
            </div>
        </main>
    );
}

export default App;
