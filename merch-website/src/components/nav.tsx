import "./nav.scss";
import "material-symbols";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<button className="btn nav-link">
				<span className="material-symbols-outlined">menu</span>
			</button>

			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link social-link" href="#">
						Twitch
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link social-link" href="#">
						Discord
					</a>
				</li>
			</ul>

			<div className="ms-auto">
				<button className="btn nav-link cart">
					<span className="material-symbols-outlined">shopping_cart</span>
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
