import './App.css';
import {getContacts, saveContact} from "./api/ContactService";
import {useEffect, useRef, useState} from "react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
    const [data, setData] = useState([])
    const [values, setValues] = useState(
        {
            name: '',
            email: '',
            phone: '',
            position: '',
            status: '',
            address: ''
        }
    )
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

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleNewContact = async (e) => {
        e.preventDefault()
        try {
            const {data} = await saveContact(values)
            toggleModal(false)
            setValues({
                name: '',
                email: '',
                phone: '',
                position: '',
                status: '',
                address: ''
            })
            getAllContacts();
        } catch (error) {
            console.log(error)
        }
    }
    const toggleModal = (show) => show ? modalRef.current.showModal() : modalRef.current.close()

    return (
        <>
            <main className='main'>
                <div className='container'>
                    <Header toggleModal={toggleModal} numberOfContacts={data.totalElements}/>
                    <ContactList data={data}/>
                </div>

            </main>
            <dialog ref={modalRef} className='modal'>
                <div className='modal__header'>
                    <h1>New Contact</h1>
                    <i onClick={()=>toggleModal(false)} className="bi bi-x-circle-fill"></i>
                </div>
                <hr/>
                <form onSubmit={handleNewContact}>
                    <div className='contact_details'>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-person"></i> Name</span>
                            <input type="text" name='name' value={values.name} onChange={onChange} required/>
                        </div>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-envelope-at"></i> Email</span>
                            <input type="text" name='email' value={values.email} onChange={onChange} required/>
                        </div>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-telephone"></i> Phone</span>
                            <input type="text" name='phone' value={values.phone} onChange={onChange} required/>
                        </div>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-briefcase"></i> Position</span>
                            <input type="text" name='position' value={values.position} onChange={onChange} required/>
                        </div>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-check"></i> status</span>
                            <input type="text" name='status' value={values.status} onChange={onChange} required/>
                        </div>
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-geo-alt"></i> address</span>
                            <input type="text" name='address' value={values.address} onChange={onChange} required/>
                        </div>
                    </div>

                    <button type='submit'>save</button>
                </form>
            </dialog>
        </>
    );
}

export default App;
