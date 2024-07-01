import React from "react";

const Header = ({numberOfContacts, toggleModal, positions, getContactsByPosition, getAllContacts}) => {
    const handleChange = (e) =>{
        const selectedValue = e.target.value;
        if(selectedValue === "all"){
            return getAllContacts();
        }
        return getContactsByPosition(selectedValue)
    }
    return (
        <div className="header">
            <div>number of contacts: {numberOfContacts} </div>
            <select onChange={handleChange}>
                <option value="all">All contacts</option>
                {positions.map(position => {
                    return (
                        <option key={position} value={position}>
                            {position}
                        </option>
                    )
                })}
            </select>
            <button onClick={() => toggleModal(true)}><i className="bi bi-person-plus"></i> Add new Contact</button>
        </div>
    )
}
export default Header