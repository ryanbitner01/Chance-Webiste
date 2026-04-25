import { NavLink } from "react-router";
import "./hamburgerMenu.scss";

interface HamburgerMenuProps {
	onMenuItemClicked: () => void;
	isOpen: boolean;
}

function HamburgerMenu({ onMenuItemClicked, isOpen }: HamburgerMenuProps) {
	return (
		<div className={`menu ${isOpen ? "open" : "closed"}`}>
			<ul>
				<li className="menu-item">
					<NavLink
						onClick={onMenuItemClicked}
						to="/"
						className={({ isActive }) => (isActive ? "active" : "")}>
						home
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink
						onClick={onMenuItemClicked}
						to="/merch"
						className={({ isActive }) => (isActive ? "active" : "")}>
						Merch
					</NavLink>
				</li>
				<li className="menu-item">
					<a
						onClick={onMenuItemClicked}
						target="__blank"
						href="https://twitch.tv/chanc3sr">
						Twitch
					</a>
				</li>
				<li className="menu-item">
					<a
						onClick={onMenuItemClicked}
						target="__blank"
						href="https://discord.gg/ScQffdcvhQ">
						Discord
					</a>
				</li>
			</ul>
		</div>
	);
}

export default HamburgerMenu;
