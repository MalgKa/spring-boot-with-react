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
                <p><i className="bi bi-envelope-at-fill"></i> {contact.email}</p>
                <p><i className="bi bi-telephone-fill"></i> {contact.phone}</p>
                <p><i className="bi bi-geo-alt-fill"></i> {contact.address}</p>
                <p>{contact.status === "active" ? <i className="bi bi-check-circle-fill"></i> :
                    <i className="bi bi-x-circle-fill"></i>} {contact.status}</p>
            </div>
        </Link>
    )
}
export default Contact