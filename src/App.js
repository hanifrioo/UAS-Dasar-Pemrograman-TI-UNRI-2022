import React, { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";


const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormdata] = useState({
    id: '',
    title: '',
    isbn: '',
    author: '',
  });


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormdata(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      title: addFormData.title,
      isbn: addFormData.isbn,
      author: addFormData.author,
    };
  
    const newContacts = [...contacts, newContact];
    setContacts(newContacts)
    
  };


  return (
    <div className="app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>ISBN</th>
            <th>AUTHOR</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
            <ReadOnlyRow contact={contact}/>
            </Fragment>
         ))}
        </tbody>
      </table>
      </form>

      <h2>Add a Datebase Jurnal</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
        type="text"
        name="id"
        required="required"
        placeholder="Enter an ID..."
        onChange={handleAddFormChange}
        />
        <input
        type="text"
        name="title"
        required="required"
        placeholder="Enter an TITLE..."
        onChange={handleAddFormChange}
        />
        <input
        type="text"
        name="isbn"
        required="required"
        placeholder="Enter an ISBN..."
        onChange={handleAddFormChange}
        />
        <input
        type="text"
        name="author"
        required="required"
        placeholder="Enter an AUTHOR..."
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default App;
