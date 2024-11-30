import React from "react";
import Card from "./Card";
import Header from "./Header";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      img={contact.imgURL}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
    ></Card>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Avatar imgURL="https://vtop.vitap.ac.in/vtop/assets/img/VIT_AP_logo.png"></Avatar>

      {contacts.map(createCard)}

      {/* <Card
        img={contacts[0]["imgURL"]}
        name={contacts[0]["name"]}
        phone={contacts[0]["phone"]}
        email={contacts[0]["email"]}
      ></Card>
      <Card
        img={contacts[1]["imgURL"]}
        name={contacts[1]["name"]}
        phone={contacts[1]["phone"]}
        email={contacts[1]["email"]}
      ></Card>
      <Card
        img={contacts[2]["imgURL"]}
        name={contacts[2]["name"]}
        phone={contacts[2]["phone"]}
        email={contacts[2]["email"]}
      ></Card> */}

      <Avatar imgURL="https://picsum.photos/200/300"></Avatar>
    </div>
  );
}

export default App;
