import { useState } from "react";
import "./nav.scss";
import "material-symbols";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const [hamburgerOpen, setHamburgerVisible] = useState(false);

	const handleClick = () => {
		setHamburgerVisible(!hamburgerOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="hamburger-menu nav-button">
				<button onClick={handleClick} className="btn nav-link cart">
					<span className="material-symbols-outlined">menu</span>
				</button>
			</div>
			<ul className="navbar-nav ">
				<li className="nav-item">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "active nav-link social-link" : "nav-link social-link"
						}>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/merch"
						className={({ isActive }) =>
							isActive ? "active nav-link social-link" : "nav-link social-link"
						}>
						Merch
					</NavLink>
				</li>
				<li className="nav-item">
					<a
						className="nav-link social-link"
						target="__blank"
						href="https://twitch.tv/chanc3sr">
						Twitch
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link social-link"
						target="__blank"
						href="https://discord.gg/ScQffdcvhQ">
						Discord
					</a>
				</li>
			</ul>

			<HamburgerMenu
				onMenuItemClicked={() => setHamburgerVisible(false)}
				isOpen={hamburgerOpen}
			/>

			<div className="ms-auto">
				<button className="btn nav-link cart">
					<span className="material-symbols-outlined">shopping_cart</span>
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
