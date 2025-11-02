import {Link as MUILink} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useCreateUser} from "../../hooks/useCreateUser";
import {extractErrorMessage} from "../../utils/errors";
import Auth from "./Auth";

const Signup = () => {
	const [createUser] = useCreateUser();
	const [error, setError] = useState("");
	return (
		<Auth
			error={error}
			submitButtonLabel="Signup"
			onSubmit={async ({email, password}) => {
				try {
					await createUser({
						variables: {
							createUserInput: {
								email,
								password,
							},
						},
					});
					setError("");
				} catch (e) {
					const errorMessage = extractErrorMessage(e);
					if (errorMessage) {
						setError(errorMessage);
						return;
					}
					setError("Unknown error occurred.");
				}
			}}
		>
			<Link to={"/login"} style={{alignSelf: "center"}}>
				<MUILink>Signup</MUILink>
			</Link>
		</Auth>
	);
};

export default Signup;
