import router from "../components/Router";
import client from "../constants/apollo-client";

export const onLogout = () => {
	router.navigate("/login");
	client.clearStore(); // TODO: check why client.resetStore() doesn't work
};
