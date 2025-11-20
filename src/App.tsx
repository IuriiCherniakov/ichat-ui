import { ApolloProvider } from "@apollo/client/react";
import {
	Container,
	createTheme,
	CssBaseline,
	Grid,
	ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import Guard from "./components/auth/Guard";
import ChatList from "./components/chat-list/ChatList";
import Header from "./components/header/Header";
import router from "./components/Router";
import Snackbar from "./components/snackbar/Snackbar";
import client from "./constants/apollo-client";
import { usePath } from "./hooks/usePath";

const darkTheme = createTheme({
	palette: {
		mode: "light",
	},
});

// TODO: LOGOUT is broken (rerenders and overrides the path)
const App = () => {
	const { path } = usePath();
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Header />
				<Guard>
					{path === "/" ? (
						<Grid container>
							<ChatList />
							<Grid size={5}>
								<Routes />
							</Grid>
						</Grid>
					) : (
						<Routes />
					)}
				</Guard>
				<Snackbar />
			</ThemeProvider>
		</ApolloProvider>
	);
};

const Routes = () => {
	return (
		<Container>
			<RouterProvider router={router} />
		</Container>
	);
};

export default App;
