import React from "react";
import {getContact} from "../api/ContactService";

const Contact = ({contact}) => {
//test
    const handleOnClick = async () => {
        const {data} = await getContact(contact.id)
        console.log(data)
    }
    return (
        <a className='contact__item'>
            <header className='contact__header'>
                <div>
                    <img src={contact.photoUrl} alt={contact.name}/>
                </div>
                <div>
                    <div>{contact.name}</div>
                    <div>{contact.position}</div>
                </div>
            </header>
            <div className='contact__body'>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.address}</p>
                <p>{contact.status}</p>
            </div>
            <button onClick={handleOnClick}>click</button>
        </a>
    )
}
export default Contact