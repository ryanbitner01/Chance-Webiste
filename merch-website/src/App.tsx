import Home from "./components/home/home";
import HamburgerMenu from "./components/nav/hamburgerMenu/hamburgerMenu";

function App() {
	return (
		<>
			<HamburgerMenu (onMenuItemClicked) />
			<Home />;
		</>
	);
}

export default App;
