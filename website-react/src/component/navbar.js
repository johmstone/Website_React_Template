import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<Link to="/" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1">WebSite Template</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Menu</button>
				</Link>
			</div>
		</nav>
	);
};