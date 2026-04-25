import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import MerchList from "./components/merch/merchList/merchList.tsx";

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

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/merch" element={<MerchList />} />
		</Routes>
	</BrowserRouter>,
);
