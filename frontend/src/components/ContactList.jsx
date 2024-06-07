import React from "react";
import Contact from "./Contact";

const ContactList = ({data, currentPage, getAllContacts}) => {


    return (
        <main className='main'>
            <ul className='contact__list'>
                {data.content && data.content.map(contact => (<Contact contact={contact} key={contact.id}/>
                ))}
            </ul>
            <button onClick={() => getAllContacts(currentPage - 1)} className={currentPage == 0 ? "disabled" : ""}><i className="bi bi-skip-backward-fill"></i>
            </button>
            <button onClick={() => getAllContacts(currentPage + 1)} className={currentPage == data.totalPages-1  ? "disabled" : ""}><i className="bi bi-skip-forward-fill"></i></button>
        </main>

    )
}
export default ContactList