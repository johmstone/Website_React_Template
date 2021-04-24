/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from '../store/appContext';

import Configuration from '../services/configuration'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const Navbar = () => {

	const { store } = useContext(Context);
	const [anchorEl, setAnchorEl] = useState(null);
	const config = new Configuration();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	function HorizontalMenu() {
		const isMenu = store.menu ? true : false;
		if (isMenu) {
			return (
				<ul className="nav navMenu">
					{store.menu.map((item, i) => {
						let url = (item.Controller === 'Home' ? '' : item.Controller) + (item.Action === 'Index' ? '' : "/" + item.Action)
						return (
							<li className="nav-item" key={i}>
								<Link to={url} className="text-uppercase MenuLink text-font-base">
									{item.DisplayName}
								</Link>
							</li>

						)
					})}
					<li className="nav-item">
						<Link to="Login" className="text-uppercase MenuLink text-font-base">
							Accesar
						</Link>
					</li>
				</ul>
			)
		} else {
			return (
				<ul className="nav navMenu">
					<li className="nav-item">
						<Link to="Login" className="text-uppercase MenuLink text-font-base">
							Accesar
						</Link>
					</li>
				</ul>
			)
		}
	}
	function VerticalMenu() {
		const isMenu = store.menu ? true : false;
		if (isMenu) {
			return (
				<ul className="nav navMenu">
					<li className="nav-item">
						<i class="fas fa-bars text-uppercase MenuLink text-font-base fa-15x" onClick={handleClick} aria-controls="verticalmenu"></i>
						<Menu id="verticalmenu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleClose}>Logout</MenuItem>
						</Menu>
					</li>
				</ul>
			)
		} else {
			return (
				<ul className="nav navMenu">
					<li className="nav-item">
						<Link to="Login" className="text-uppercase MenuLink text-font-base">
							Accesar
						</Link>
					</li>
				</ul>
			)
		}
	}

	return (
		<nav className="navbar navbar-dark bg-dark px-4">
			<Link to="/" className="text-decoration-none">
				<span className="navbar-brand mb-0 h1">{config.AppName}</span>
			</Link>
			<div className="ml-auto">
				{/* <HorizontalMenu /> */}
				<VerticalMenu />
			</div>
		</nav>
	);
};