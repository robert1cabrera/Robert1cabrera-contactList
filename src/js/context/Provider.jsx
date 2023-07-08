import React, { createContext, useReducer } from "react";
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./contactListActions.js";

export const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.data],
      };
    // case EDIT_CONTACT:
    //   return {
    //     ...state,
    //     contacts: state.contacts.map((contact) =>
    //       contact.id === action.data.id ? action.data : contact
    //     ),
    //   };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.data.id
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Robert Cabrera',
      email: 'Robert1cabrera@gmail.com',
      phone: 'xxx-xxx-xxxx',
      address: 'Test address',
    },
  ],
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}
