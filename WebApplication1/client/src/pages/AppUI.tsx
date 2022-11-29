import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "../contexts/AuthContext";
import { Grid } from "@mui/material";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from "../components/Menu";
import Footer from "../components/Footer";



export const AppUI = (props: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (

    <Grid
      container
      spacing={2.5}
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
        {props.children}
      </Grid>
      <Footer />
    </Grid>
  )
}