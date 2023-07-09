import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContactPage from "./pages/AddContactPage.jsx";

import ContactListPage from "./pages/ContactListPage.jsx";
import ContextProvider from './context/Provider.jsx'


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ContextProvider>
					<Routes>
						<Route path="/" element={<ContactListPage />} />
						<Route path="/add-contact" element={<AddContactPage />} />
						{/* <Route path="/" element={<EditContactPage />} />  */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ContextProvider>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
