import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContacItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

function ContactItem({ name, tag, imageUrl, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContacItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
