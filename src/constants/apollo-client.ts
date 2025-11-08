import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import router from "../components/Router";
import { excludedRoutes } from "./excludedRoutes";
import { API_URL } from "./urls";

const httpLink = new HttpLink({ uri: `${API_URL}/graphql` });

const logoutLink = onError((err: any) => {
	const errArray = err.error.errors;
	if (
		errArray.length &&
		(errArray[0].extensions?.originalError as any)?.statusCode === 401 //TODO: resolve typescript problems
	) {
		if (!excludedRoutes.includes(window.location.pathname)) {
			router.navigate("/login");
			client.clearStore(); // TODO: check why client.resetStore() doesn't work
		}
	}
});
const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: logoutLink.concat(httpLink),
});

export default client;
