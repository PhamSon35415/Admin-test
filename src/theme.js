import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007BFF",
        },
        secondary: {
            main: "#6C757D",
        },
        background: {
            default: "#F8F9FA",
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
        h6: {
            fontWeight: 600,
        },
    },
});

export default theme;
