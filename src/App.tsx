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
				<Grid container>
					<Grid>
						<ChatList />
					</Grid>
					{/*<Grid>*/}
					<Container>
						<Guard>
							<RouterProvider router={router} />
						</Guard>
					</Container>
					{/*</Grid>*/}
				</Grid>
				<Snackbar />
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default App;
