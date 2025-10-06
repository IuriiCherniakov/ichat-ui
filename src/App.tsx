import {ApolloProvider} from "@apollo/client/react";
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import {RouterProvider} from "react-router-dom";
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
				<Container>
					<RouterProvider router={router} />
				</Container>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
