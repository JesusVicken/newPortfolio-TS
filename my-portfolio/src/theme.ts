import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#df8e3e',
        },
    },
    typography: {
        fontFamily: 'Segoe UI, Arial, sans-serif',
    }
});

theme = responsiveFontSizes(theme);

export default theme;