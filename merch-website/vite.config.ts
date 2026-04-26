import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@features": path.resolve(__dirname, "src/features"),
			"@domain": path.resolve(__dirname, "src/domain"),
			"@data": path.resolve(__dirname, "src/data"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@di": path.resolve(__dirname, "src/di"),
			"@shared": path.resolve(__dirname, "src/shared"),
		},
	},
});
