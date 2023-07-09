import React, { useState, useContext } from "react";
import { Context } from '../context/Provider.jsx'
import { contactListActions } from '../context/contactListActions.js'

export default function AddContactPage() {
    const { state, dispatch } = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('In the onSubmit');
        dispatch(contactListActions.ADD_CONTACT({
            name,
            email,
            phone,
            address
        }));
    };

    console.log('test');

    return (
        <div className="outside">
            <div className="container-fluid">
                <h1 className="contact-h1">Add a new contact</h1>
                <form className="addinput" action="" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">Full Name</label>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email</label>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneInput" className="form-label">Phone</label>
                        <input type="number" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="addressInput" className="form-label">Address</label>
                        <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}
