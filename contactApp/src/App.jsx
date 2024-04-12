import React from "react";
import createCard from "./components/Card";
import { contacts } from "./contacts";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Contact Info</h1>
      {contacts.map(createCard)}
    </>
  );
}

export default App;
