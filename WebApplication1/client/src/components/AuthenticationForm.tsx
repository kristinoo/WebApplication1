import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Typography } from '@mui/material';
import AuthInput from "../objects/AuthInput";
import React from "react";
import authRepository from "../repositories/AuthRepository";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const AuthenticationForm = () => {

    const loginRef: React.RefObject<HTMLInputElement> = React.createRef();
    const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const handleLogin = () => {
        const authInput: AuthInput = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? ""
        }

        console.log(authInput);

        authRepository
            .login(authInput)
            .finally(() => {
                console.log(authRepository.getInfo());
            });
    }

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box>

                        <TextField
                            id="standard-basic"
                            label="Login"
                            variant="standard"
                            fullWidth
                            inputRef={loginRef}
                            margin="normal"
                            required
                            name="login"
                            autoComplete="login"
                            autoFocus
                        />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            fullWidth type="password"
                            inputRef={passwordRef}
                            margin="normal"
                            required
                            name="password"
                            autoComplete="current-password"
                        />

                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AuthenticationForm;