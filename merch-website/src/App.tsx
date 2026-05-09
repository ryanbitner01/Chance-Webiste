import HomePage from "@features/HomePage";
import MerchPage from "@features/MerchPage";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

const applyTheme = (e: MediaQueryList | MediaQueryListEvent) => {};

// set initial theme
applyTheme(mediaQuery);

// listen for changes
mediaQuery.addEventListener("change", applyTheme);
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />}></Route>
				<Route path="/merch" element={<MerchPage></MerchPage>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
