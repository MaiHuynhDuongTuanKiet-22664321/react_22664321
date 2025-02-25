import React from "react";

const Contact = ({ chidi }) => {
    return (
    <>
     <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "10px",
            maxWidth: "300px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
        }}>
            <h3 style={{ margin: 0 }}>{chidi.firstName}</h3>
            <p style={{ fontSize: "14px", color: "gray", margin: "5px 0" }}>{chidi.lastName}</p>
            <hr />
            <p><strong>Phone:</strong> {chidi.phone}</p>
            <hr />
            <p><strong>Address:</strong> {chidi.address}</p>
        </div>
    
    </>
        
    );
};

export default Contact;
