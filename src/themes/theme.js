// import createTheme di sini
import { createTheme } from "@mui/material/styles";
// misalnya kita ingin menggunakan material color bawaan mui
import { blue, green } from "@mui/material/colors";

// Buat theme yang kita inginkan di sini
const theme = createTheme({
  palette: {
    primary: {
      // Misalnya kita ingin menggunakan warna dasarnya adalah hijau
      main: green[600],
    },
    secondary: {
      // Di sini warna secondarynya adalah biru
      main: blue[700],
    },
  },
});

export default theme;
