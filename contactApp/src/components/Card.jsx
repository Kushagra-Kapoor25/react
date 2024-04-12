import React from "react";
import Avatar from "./Avatar";
import ContactInfo from "./ContactInfo";
import EmailInfo from "./EmailInfo";

function Card(props) {
  return (
    <div className="p-5 border-2 border-dotted m-4 ">
      <h3 className="text-xl font-semibold underline">{props.name}</h3>
      <div className="mt-1 md:flex ">
        <div className="mr-5 p-2 ">
          <Avatar imageUrl={props.imageUrl} />
          <EmailInfo email={props.email} />
          <ContactInfo phone={props.phone} />
        </div>
        <div>
          <p className="text-justify">{props.about}</p>
        </div>
      </div>
    </div>
  );
}

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imageUrl={contact.imageUrl}
      email={contact.email}
      phone={contact.phone}
      about={contact.about}
    />
  );
}

export default createCard;
