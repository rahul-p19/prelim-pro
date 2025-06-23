import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import PageNotFound from "./components/PageNotFound.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<main className="w-full min-h-screen bg-background text-white font-sora">
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
			</main>
		</BrowserRouter>
	</StrictMode>
);
