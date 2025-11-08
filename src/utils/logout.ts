import router from "../components/Router";
import client from "../constants/apollo-client";
import { authenticatedVar } from "../constants/authenticated";

export const onLogout = () => {
	authenticatedVar(false);
	router.navigate("/login");
	client.clearStore(); // TODO: check why client.resetStore() doesn't work
};
