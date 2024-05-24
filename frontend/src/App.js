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
        <div>
            <h1>so hello :)</h1>
            <button onClick={() => getAllContacts()}>get all contacts</button>
            <ContactList data={data}/>
        </div>
    );
}

export default App;
