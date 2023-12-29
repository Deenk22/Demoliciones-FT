import LandingPage from "./view/LandingPage/LandingPage";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material";
import {colourPalette} from "./constants/colourPalette";
import {typography} from "./constants/typography";
import {Toaster} from "react-hot-toast";
import "./App.css";

const theme = createTheme({
  ...colourPalette,
  ...typography,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
