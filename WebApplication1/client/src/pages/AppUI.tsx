import {useContext} from "react";
import {AuthContext, AuthContextProvider} from "../contexts/AuthContext";
import {BottomNavigation, Container, Grid} from "@mui/material";
import * as React from 'react';
import Menu from "../components/Menu";
import Footer from "../components/Footer";
export const AppUI = (props: any) => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <AuthContextProvider>
            <Grid
                container
                spacing={2.5}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}>
                <Menu item xs={2}/>
                <Grid
                    container
                    item xs={8}
                    direction="row"
                    alignItems="center"
                    justifyContent="center">
                    {props.children}
                </Grid>
                <Footer item xs={2}/>
            </Grid>
        </AuthContextProvider>
    )
}
      