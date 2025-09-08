import React from 'react';
import {
    Container,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from '@mui/material';
import router from './components/Router';
import { RouterProvider } from 'react-router-dom';

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container>
                <RouterProvider router={router} />
            </Container>
        </ThemeProvider>
    );
};

export default App;
