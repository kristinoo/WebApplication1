import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import AuthPage from "./pages/AuthPage";
import { Grid } from "@mui/material";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Menu />
      <Grid
        item
        container
        xs={12}
        direction="row"
        alignItems="center"
        justifyContent="center">
        {
          !isAuthenticated && <AuthPage />
        }
      </Grid>
      <Footer />
    </Grid>
  )
}

export default App;