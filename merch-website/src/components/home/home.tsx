import ChanceLogoText from "../../assets/ChanceLogoText.svg";
import "./home.scss";
import NavBar from "../nav/nav";

function Home() {
	return (
		<>
			<NavBar></NavBar>
			<div className="container">
				<img className="flex" src={ChanceLogoText}></img>
				<button
					type="button"
					className="btn btn-secondary merch-button rubik-bold">
					Buy Merch
				</button>
			</div>
		</>
	);
}

export default Home;
