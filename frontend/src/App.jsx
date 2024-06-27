import './App.css';
import {deleteContact, getContacts, saveContact, uploadPhoto} from "./api/ContactService";
import {useEffect, useRef, useState} from "react";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import ContactDetails from "./components/ContactDetails";

function App() {
    const [data, setData] = useState([])
    const [file, setFile] = useState(undefined)
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
    const [currentPage, setCurrentPage] = useState({})
    const modalRef = useRef();
    const getAllContacts = async (page = 0, size = 8) => {
        try {
            setCurrentPage(page)
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
            const formData = new FormData()
            formData.append('photo', file, file.name)
            formData.append('id', data.id)
            await uploadPhoto(formData)
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

    const updateImage = async (formData) => {
        try {
            await uploadPhoto(formData)
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact = async(contact)=>{
        await saveContact(contact);
        getAllContacts()
    }

    const removeContact = async(id) =>{
        try{
            await deleteContact(id)
            getAllContacts()
        } catch (error){
            console.log(error)
        }
    }
    const toggleModal = (show) => show ? modalRef.current.showModal() : modalRef.current.close()

    return (
        <>
            <main className='main'>
                <div className='container'>
                    <Header toggleModal={toggleModal} numberOfContacts={data.totalElements}/>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/contacts"}/>}/>
                        <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} removeContact={removeContact}/>}/>
                        <Route path="/contacts/:id" element={<ContactDetails updateImage={updateImage} updateContact={updateContact}/>}/>
                    </Routes>
                </div>

            </main>
            <dialog ref={modalRef} className='modal'>
                <div className='modal__header'>
                    <h1>New Contact</h1>
                    <i onClick={() => toggleModal(false)} className="bi bi-x-circle-fill"></i>
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
                        <div className='input-box'>
                            <span className='details'><i className="bi bi-cloud-arrow-up"></i> Profile photo</span>
                            <input type="file" name='photo' onChange={(e) => setFile(e.target.files[0])} required/>
                        </div>
                    </div>

                    <button type='submit'>save</button>
                </form>
            </dialog>
        </>
    );
}

export default App;
