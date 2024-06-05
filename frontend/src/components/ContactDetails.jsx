import React, {useEffect, useRef, useState} from 'react'
import {useParams} from "react-router-dom";
import {getContact} from "../api/ContactService";

const ContactDetails = ({updateImage}) => {
    const inputRef = useRef()
    const [contact, setContact] = useState(
        {
            name: '',
            email: '',
            phone: '',
            position: '',
            status: '',
            address: '',
            photoUrl: ""
        }
    )
    const {id} = useParams();
    // console.log(useParams())
    // console.log(id)

    const getSingleContact = async (id) => {
        try {
            const {data} = await getContact(id)
            console.log(data)
            setContact(data)
        } catch (error) {
            console.error("Failed to fetch contact", error)
        }
    }

    const selectImage = () => {
        inputRef.current.click();
    }

    const updatePhoto = async (file) => {
        try {
            const formData = new FormData();
            formData.append("photo", file, file.name)
            formData.append("id", id)
            await updateImage(formData);
            // await getSingleContact(id) //to fix : The image URL doesn't change because the file is overwritten with the same name, no rerender occurs
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleContact(id)
    }, [])


    const onChange = (e) => {
        const {name, value} = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value
        }))
    }
    return (
        <>

            <div className="profile">
                <div className='profile__details'>
                    <img src={contact.photoUrl} alt={contact.name}/>
                    <div>
                        <p className="profile__name">{contact.name}</p>
                        <button onClick={selectImage}><i className="bi bi-cloud-arrow-up"></i> Change Photo</button>
                    </div>
                </div>
                <div className="profile__settings">
                    <form>
                        <div className='contact_details'>
                            <input type="hidden" defaultValue={contact.id} name="id"/>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-person"></i> Name</span>
                                <input type="text" name='name' value={contact.name} onChange={onChange} required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-envelope-at"></i> Email</span>
                                <input type="text" name='email' value={contact.email} onChange={onChange} required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-telephone"></i> Phone</span>
                                <input type="text" name='phone' value={contact.phone} onChange={onChange} required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-briefcase"></i> Position</span>
                                <input type="text" name='position' value={contact.position} onChange={onChange}
                                       required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-check"></i> Status</span>
                                <input type="text" name='status' value={contact.status} onChange={onChange} required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'><i className="bi bi-geo-alt"></i> Address</span>
                                <input type="text" name='address' value={contact.address} onChange={onChange} required/>
                            </div>
                        </div>

                        <button type='submit'><i className="bi bi-floppy"></i> save</button>
                    </form>
                </div>
            </div>
            <form style={{display: 'none'}}>
                <input type="file" ref={inputRef} onChange={(e) => updatePhoto(e.target.files[0])} name="photo"
                       accept="image/*"/>
            </form>
        </>
    )
}

export default ContactDetails