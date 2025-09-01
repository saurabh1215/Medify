import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Search from "./Search/Search";
import Home from "./Home/Home";
import MyBookings from "./MyBookings/MyBookings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


export const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: { main: "#2AA7FF", green: "#00A500", secondary: "#1B3C74" },
  },
  
});

// Responsive typography
theme.typography.h1 = { [theme.breakpoints.down("sm")]: { fontSize: "36px" } };
theme.typography.h2 = { [theme.breakpoints.down("sm")]: { fontSize: "32px" } };
theme.typography.h3 = { [theme.breakpoints.down("sm")]: { fontSize: "22px" } };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="my-bookings" element={<MyBookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
