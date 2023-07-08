import React, { useState, useContext } from "react";

import { Context } from '../context/Provider.jsx'
import { contactListActions } from '../context/contactListActions.js'

export default function AddContactPage() {
    const { state, dispatch } = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('In the onsubmit')
        dispatch(contactListActions.ADD_CONTACT({
            name,
            email
            //phone
            // 
        }))
    }

    return (
        <div className="container-fluid">
            <h1>Add contact</h1>

            <form action="" onSubmit={onSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                {/* <input type="text" />
                <input type="text" /> */}

                <button>Add</button>
            </form>
        </div>
    )
}