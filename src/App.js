// Gunakan theme di sini
import { Box, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

// Gunakan MUI di sini
import { Button, Typography } from "@mui/material";

function App() {
  return (
    // Gunakan ThemeProvider di sini
    // Inject Context Theme di sini
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box p={2}>
            <Typography variant="h5">React List dan Axios</Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 2,
            }}
          >
            <Button variant="contained" color="primary">
              Halo Warna Hijau
            </Button>

            <Button variant="contained" color="secondary">
              Halo Warna Biru
            </Button>
          </Box>
        </header>
      </div>

      {/* Jangan lupa ditutup */}
    </ThemeProvider>
  );
}

export default App;
