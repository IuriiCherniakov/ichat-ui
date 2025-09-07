import {Button, Stack, TextField} from "@mui/material";

const Auth = () => {
    return (
        <Stack
            spacing={3}
            sx={
                {
                    justifyContent: 'center',
                    height: '100vh',
                    maxWidth: {
                        md: "30%",
                        xs: "70%"
                    },
                    margin: '0 auto',
                }
            }
        >
            <TextField
                variant="outlined"
                label="Email"
                type="email"
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
            />
            <Button variant="contained">Login</Button>
        </Stack>
    )
}
export default Auth;