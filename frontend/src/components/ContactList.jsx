import React from "react";

const ContactList = ({data}) => {
    return (
        <ul>
            {data.content && data.content.map((contact, index) => (
                <li key={index}>{contact.name}, {contact.phone}, {contact.position}, {contact.email}, {contact.photo_url}</li>
            ))}
        </ul>
    )
}
export default ContactList