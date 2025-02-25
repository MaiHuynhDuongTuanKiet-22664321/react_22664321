import React, { useState } from "react";
import ContactList from "./ContactList";
import { data } from "./data";

function App() {
  const [contacts, setContacts] = useState(data);
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
  const handleDeleteAll = () => {
    setContacts([]);
  }
  return (
    <div>
      <ContactList contacts={contacts} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll}/>
    </div>
  );
}

export default App;
