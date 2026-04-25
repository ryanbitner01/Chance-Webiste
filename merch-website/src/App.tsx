import { useEffect } from "react";
import Home from "./components/home/home";

const root = document.getElementById("root");

function App() {
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const applyTheme = (e) => {
			document.documentElement.setAttribute(
				"data-bs-theme",
				e.matches ? "dark" : "light",
			);
		};

		// Set initial theme
		applyTheme(mediaQuery);

		// Listen for changes (user switches OS theme)
		mediaQuery.addEventListener("change", applyTheme);

		return () => {
			mediaQuery.removeEventListener("change", applyTheme);
		};
	}, []);

	return <Home />;
}

export default App;
