import React from "react";
import App from "../App";

const ReadOnlyRow = ({ contact }) => {
    return (
        <tr>
        <td>{contact.id}</td>
        <td>{contact.title}</td>
        <td>{contact.isbn}</td>
        <td>{contact.author}</td>
        </tr>
    )
}

export default ReadOnlyRow