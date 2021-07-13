import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./AppRoutes";
import { MaterialThemeProvider } from "../_metronic/layout";
import { UserContextProvider } from "context/UserContext";
import { Toaster } from "react-hot-toast";
import { SubheaderContextProvider } from "context/SubheaderContext";
import { LoadingScreen } from "components/layout/LoadingScreen";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

export default function App({ basename }: { basename: string }) {
	return (
		<QueryClientProvider client={queryClient}>
			<UserContextProvider>
				<LoadingScreen>
					<BrowserRouter basename={basename}>
						<MaterialThemeProvider>
							<Toaster />
							<SubheaderContextProvider>
								<Routes />
							</SubheaderContextProvider>
						</MaterialThemeProvider>
					</BrowserRouter>
				</LoadingScreen>
			</UserContextProvider>
		</QueryClientProvider>
	);
}
