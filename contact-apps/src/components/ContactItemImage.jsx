import React from "react";

function ContacItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact" />
    </div>
  );
}

export default ContacItemImage;
