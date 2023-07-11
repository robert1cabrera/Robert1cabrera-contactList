import React, { useContext } from "react";
import { contactListActions } from "../context/contactListActions.js";
import { Context } from '../context/Provider.jsx'


export default function ContactListPage() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="cl-div">
      <h1 className="cl-h1">Contact List Page</h1>
      <button type="button" class="btn-cl btn-success btn-md" onClick={() => dispatch(contactListActions.ADD_CONTACT({ name: "Add something else" }))}>Add New Contact</button>
      {state.contacts.map((contact) => (
        <div className="cl-div1" key={contact.id}>
          <p>{contact.name}</p>
          <img src="https://placehold.co/100x100" className="cl-img" />
        </div>
        
      ))}
    </div>
  );
}