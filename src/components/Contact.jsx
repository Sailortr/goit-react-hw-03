import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <div>
        <p>
          <strong>👤 {contact.name}</strong>
        </p>
        <p>📞 {contact.number}</p>
      </div>
      <button onClick={() => deleteContact(contact.id)}>❌ Delete</button>
    </div>
  );
};

export default Contact;
