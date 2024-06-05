import React from "react";

const Header = ({numberOfContacts, toggleModal}) => {


    return(
        <div className="header">
            <div>number of contacts: {numberOfContacts} </div>
            <button onClick={() =>toggleModal(true)}>Add new Contact</button>
        </div>
    )
}
export default Header