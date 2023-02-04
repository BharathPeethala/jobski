import React, { useState, useEffect } from "react";
export const Context = React.createContext();
function getInitialState() {
	const roles = localStorage.getItem("roles");
	return roles ? JSON.parse(roles) : [];
}
function Store({ children }) {
	const [roles, setRoles] = useState(getInitialState);
	useEffect(() => {
		localStorage.setItem("roles", JSON.stringify(roles));
	}, [roles]);
	return (
		<Context.Provider value={[roles, setRoles]}>{children}</Context.Provider>
	);
}

export default Store;
