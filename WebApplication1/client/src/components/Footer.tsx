
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer (props:any){
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#1976d2",
            }}
            {...props}
        >
            <Container maxWidth="lg" {...props}>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="white" variant="h5">
                            React App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

