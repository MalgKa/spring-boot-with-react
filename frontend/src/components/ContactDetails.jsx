import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {getContact} from "../api/ContactService";

const ContactDetails = () => {

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
    useEffect(() => {
        getSingleContact(id)
    }, [])


    const onChange = () => {

    }
    return (
        <>

            <div className="profile">
                <div className='profile__details'>
                    <img src={contact.photoUrl} alt={contact.name}/>
                    <div>
                        <p className="profile__name">{contact.name}</p>
                        <button><i className="bi bi-cloud-arrow-up"></i> Change Photo</button>
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

                        <button type='submit'>save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactDetails