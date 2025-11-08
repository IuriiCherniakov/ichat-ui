import { ApolloProvider } from "@apollo/client/react";
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import router from "./components/Router";
import client from "./constants/apollo-client";

const darkTheme = createTheme({
	palette: {
		mode: "light",
	},
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Header />
				<Container>
					<Guard>
						<RouterProvider router={router} />
					</Guard>
				</Container>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
