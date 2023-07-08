import React, { useContext } from "react";
import { contactListActions } from "../context/contactListActions.js";
import { Context } from '../context/Provider.jsx'


export default function ContactListPage() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h1>Contact List Page</h1>
      
      <button
        onClick={() =>
          dispatch(contactListActions.ADD_CONTACT({ name: "Add something else" }))
        }
      >
        Add test Contact
      </button>
      {state.contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
        </div>
      ))}
    </div>
  );
}