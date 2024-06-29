import React from "react";
import Contact from "./Contact";
import {motion} from "framer-motion";

const ContactList = ({data, currentPage, getAllContacts, removeContact}) => {

    return (
        <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}} className='main'>
            <ul className='contact__list'>
                {data.content && data.content.map(contact => (<Contact contact={contact} key={contact.id} removeContact={removeContact}/>
                ))}
            </ul>
            <div className='pagination-buttons'>
                <button onClick={() => getAllContacts(currentPage - 1)}
                        className={`btn-danger ${currentPage === 0 ? "disabled" : ""}`}>
                    <i className="bi bi-skip-backward-fill"></i>
                </button>
                {data && [...Array(data.totalPages).keys()].map((page) => {
                    return <button onClick={() => getAllContacts(page)}
                                   className={page === currentPage ? "active" : ""}>{page + 1}</button>
                })}
                <button onClick={() => getAllContacts(currentPage + 1)}
                        className={`btn-danger ${currentPage === data.totalPages - 1 ? "disabled" : ""}`}><i
                    className="bi bi-skip-forward-fill"></i></button>
            </div>
        </motion.main>
    )
}
export default ContactList