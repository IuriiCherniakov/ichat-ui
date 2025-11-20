import { JSX, useEffect } from "react";
import { authenticatedVar } from "../../constants/authenticated";
import { excludedRoutes } from "../../constants/excludedRoutes";
import { useGetMe } from "../../hooks/useGetMe";

interface GuardProps {
	children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
	const { data: user } = useGetMe();

	useEffect(() => {
		if (user) {
			authenticatedVar(true);
		}
	}, [user]);

	// useEffect(() => {
	// 	// TODO: any
	//
	// 	console.log("ERROR from GUARD", { error });
	// 	// if ((error as any).networkError) {
	// 	// 	snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
	// 	// }
	// }, [error]);

	return (
		<>
			{excludedRoutes.includes(window.location.pathname)
				? children
				: user && children}
		</>
	);
};

export default Guard;
