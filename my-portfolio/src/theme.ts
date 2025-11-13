import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#0a0a0a',
            light: '#1a1a1a',
            dark: '#000000',
        },
        secondary: {
            main: '#00ff88',
            light: '#66ffaa',
            dark: '#00cc66',
        },
        background: {
            default: '#0a0a0a',
            paper: '#1a1a1a',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        }
    },
    typography: {
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        h1: {
            fontSize: '4rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        }
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                }
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;