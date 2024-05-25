import React from "react";
import Contact from "./Contact";

const ContactList = ({data}) => {
    return (
        <ul className='contact__list'>
            {data.content && data.content.map(contact => (<Contact contact={contact} key={contact.id}/>
            ))}
        </ul>
    )
}
export default ContactList