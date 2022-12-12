import React from "react";

const EditableRow = () => {
    return (
        <tr>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder="Enter an ID..."
                name="id"
                ></input>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a TITLE..."
                name="title"
                ></input>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter an ISBN..."
                name="isbn"
                ></input>
            </td>
            <td>
            <input 
                type="email" 
                required="required" 
                placeholder="Enter an AUTHOR..."
                name="author"
                ></input>
            </td>
        </tr>
    );
};

export default EditableRow