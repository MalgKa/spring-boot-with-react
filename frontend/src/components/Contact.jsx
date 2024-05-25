import React from "react";

const Contact = ({contact}) => {
    return (
        <a className='contact__item'>
            <header className='contact__header'>
                <div>
                    <img src="#" alt="picture"/>
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
        </a>
    )
}
export default Contact