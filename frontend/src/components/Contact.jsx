import React from "react";

const Contact = ({contact}) =>{
    return(
        <div>
            <header className='contact__header'>
                <div>
                    {contact.phone}
                </div>
                <div>
                    <div>{contact.name}</div>
                    <div>{contact.position}</div>
                </div>
            </header>
        </div>
    )
}
export default Contact