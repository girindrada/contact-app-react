import React from "react";
import { getData } from "../utils/data";
import ContactList from "./ContactList";

function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
