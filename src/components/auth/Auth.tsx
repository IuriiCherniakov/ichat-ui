import {Button, Stack, TextField} from "@mui/material";
import React, {useState} from "react";

interface AuthProps {
	submitButtonLabel: string;
	onSubmit: (credentials: {email: string; password: string}) => Promise<void>;
	children: React.ReactNode;
	error?: string;
}

const Auth = ({submitButtonLabel, onSubmit, children, error}: AuthProps) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Stack
			spacing={3}
			sx={{
				justifyContent: "center",
				height: "100vh",
				maxWidth: {
					md: "30%",
					xs: "70%",
				},
				margin: "0 auto",
			}}
		>
			<TextField
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				variant="outlined"
				label="Email"
				type="email"
				error={!!error}
				helperText={error}
			/>
			<TextField
				value={password}
				onChange={(event) => setPassword(event.target.value)}
				label="Password"
				type="password"
				variant="outlined"
				error={!!error}
				helperText={error}
			/>
			<Button onClick={() => onSubmit({email, password})} variant="contained">
				{submitButtonLabel}
			</Button>
			{children}
		</Stack>
	);
};
export default Auth;
