import ChanceLogoText from "../../assets/ChanceLogoText.svg";
import "./home.scss";
import NavBar from "../nav/nav";
import { NavLink } from "react-router";

function Home() {
	return (
		<>
			<NavBar></NavBar>
			<div className="container">
				<img className="flex" src={ChanceLogoText}></img>
				<NavLink
					className="btn btn-secondary merch-button rubik-bold"
					to="/merch">
					Buy Merch
				</NavLink>
			</div>
		</>
	);
}

export default Home;
