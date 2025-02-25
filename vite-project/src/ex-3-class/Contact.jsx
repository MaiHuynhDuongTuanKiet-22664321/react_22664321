import React from "react";

const Contact = ({ contact, handleDelete }) => {
  return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "10px",
          maxWidth: "300px",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "10px",
          marginRight: "10px"
        }}
      >
        <h3 style={{ margin: 0 }}>{contact.firstName}</h3>
        <p style={{ fontSize: "14px", color: "gray", margin: "5px 0" }}>
          {contact.lastName}
        </p>
        <hr />
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Address:</strong> {contact.address}
        </p>
        <hr />
        <button
          onClick={() => handleDelete(contact.id)}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      </div>
  );
};

export default Contact;
