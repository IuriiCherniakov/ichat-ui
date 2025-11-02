import {Link as MUILink} from "@mui/material";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useCreateUser} from "../../hooks/useCreateUser";
import Auth from "./Auth";

const Signup = () => {
	const [createUser] = useCreateUser();
	const [error, setError] = useState("");
	return (
		<Auth
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
				} catch (e) {
					console.error(e);
					throw e;
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
