import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />s
		</QueryClientProvider>
	</React.StrictMode>,
);
