import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router";
import MerchList from "./components/merch/merchList/merchList.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/merch" element={<MerchList />} />
		</Routes>
	</BrowserRouter>,
);
