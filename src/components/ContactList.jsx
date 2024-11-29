import React from "react";
import Contact from "./Contact";
import { nanoid } from "nanoid";

const ContactList = ({ contacts, deleteContact }) => {
  
  const contactsWithId = contacts.map((contact) => ({
    id: contact.id || nanoid(),
    ...contact,
  }));

  return (
    <div>
      {contactsWithId.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
