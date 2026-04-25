import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import MerchList from "./features/merch/pages/MerchList";
import MerchDetails from "./features/merch/pages/MerchDetails";
import Layout from "./features/nav/Layout";
const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

const applyTheme = (e: MediaQueryList | MediaQueryListEvent) => {
	document.documentElement.setAttribute(
		"data-bs-theme",
		e.matches ? "light" : "dark",
	);
};

// set initial theme
applyTheme(mediaQuery);

// listen for changes
mediaQuery.addEventListener("change", applyTheme);
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/merch" element={<MerchList />} />
					<Route path="/merch/:id" element={<MerchDetails />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
