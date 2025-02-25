import React from "react";
import Contact from "./Contact";

function ContactList({ contacts, handleDelete, handleDeleteAll }) {
  return (
    <div>
      <div
        className="contact-list"
        style={{ display: "flex"}}
      >
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <button
        onClick={handleDeleteAll}
        style={{
          backgroundColor: "red",
          color: "white",
          marginBottom: "10px",
          padding: "5px 10px",
          width: "100px",
        }}
      >
        Delete All
      </button>
    </div>
  );
}

export default ContactList;
