import './App.css';
import {getContacts} from "./api/ContactService";
import {useEffect, useRef, useState} from "react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
    const [data, setData] = useState([])
    const modalRef = useRef();

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

    const handleNewContact = ()=>{}

    const toggleModal = (show) => show ? modalRef.current.showModal() : modalRef.current.close()


    return (
        <>
            <main className='main'>
                <div className='container'>
                    <Header toggleModal={toggleModal} numberOfContacts={data.totalElements}/>
                    <ContactList data={data}/>
                </div>

            </main>
            <dialog ref={modalRef}>
                <form onSubmit={handleNewContact}>
                    <div>
                        <span>name</span>
                        <input type="text" name='name' required/>
                    </div>
                    <div>
                        <span>email</span>
                        <input type="text" name='email' required/>
                    </div>
                    <div>
                        <span>phone</span>
                        <input type="text" name='phone' required/>
                    </div>
                    <div>
                        <span>position</span>
                        <input type="text" name='position' required/>
                    </div>
                    <div>
                        <span>status</span>
                        <input type="text" name='status' required/>
                    </div>
                    <div>
                        <span>address</span>
                        <input type="text" name='address' required/>
                    </div>
                    <button type='submit'>save</button>
                </form>
            </dialog>
        </>
    );
}

export default App;
