import React from "react";
import {Link} from "react-router-dom";

const Contact = ({contact}) => {
    return (
        <Link to={`/contacts/${contact.id}`} className='contact__item'>
            <header className='contact__header'>
                <div className="contact__image">
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
        </Link>
    )
}
export default Contact