import React from "react";

const Header = ({numberOfContacts}) => {
    console.log(numberOfContacts)
    return(
        <>
            <div>number of contacts: {numberOfContacts} </div>
        </>
    )
}
export default Header