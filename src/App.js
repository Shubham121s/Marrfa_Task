import React, { useState } from "react";
import { CssBaseline, Box, Container, Switch, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchPage from "./components/SearchPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#ff5722",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: darkMode
            ? "linear-gradient(135deg, #1e1e1e, #3c3c3c)"
            : "linear-gradient(135deg, #e8f5e9, #ffffff)",
          minHeight: "100vh",
          transition: "background 0.3s",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: "1px",
                color: "primary.main",
              }}
            >
              Blog Explorer 🌟
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Box>
          <SearchPage />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
