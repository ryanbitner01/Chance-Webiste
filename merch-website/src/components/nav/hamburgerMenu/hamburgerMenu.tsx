import "./hamburgerMenu.scss";

interface HamburgerMenuProps {
	onMenuItemClicked: () => void;
	isOpen: boolean;
}

function HamburgerMenu({ onMenuItemClicked, isOpen }: HamburgerMenuProps) {
	return (
		<div className={`menu ${isOpen ? 'open' : 'closed'}`}>
			<ul>
				<li onClick={onMenuItemClicked} className="menu-item">
					<a>Home</a>
				</li>
				<li onClick={onMenuItemClicked} className="menu-item">
					<a>Merch</a>
				</li>
				<li onClick={onMenuItemClicked} className="menu-item">
					<a target="__blank" href="https://twitch.tv/chanc3sr">
						Twitch
					</a>
				</li>
				<li onClick={onMenuItemClicked} className="menu-item">
					<a target="__blank" href="https://discord.gg/ScQffdcvhQ">
						Discord
					</a>
				</li>
			</ul>
		</div>
	);
}

export default HamburgerMenu;
