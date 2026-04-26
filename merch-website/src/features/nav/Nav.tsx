import { useState } from "react";
import "./nav.scss";
import "material-symbols";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink, useNavigate } from "react-router-dom";

interface Prop {
	backButton: boolean;
}

const NavBar = ({ backButton = false }: Prop) => {
	const [hamburgerOpen, setHamburgerVisible] = useState(false);
	const navigate = useNavigate();

	const handleClick = () => {
		setHamburgerVisible(!hamburgerOpen);
	};

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			{backButton ? (
				<div className="hamburger-menu nav-button">
					<button onClick={handleBack} className="btn nav-link chevron-left">
						<span className="material-symbols-outlined">chevron_left</span>
					</button>
				</div>
			) : (
				<div className="hamburger-menu nav-button">
					<button onClick={handleClick} className="btn nav-link cart">
						<span className="material-symbols-outlined">menu</span>
					</button>
				</div>
			)}

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
