import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {Box} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {Button, Icon, Stack, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import React from "react";
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const ProfileForm = () => {

    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Avatar sx={{m: 0, bgcolor: 'primary.main'}}>
                            <Avatar src="/broken-image.jpg"/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            User Profile
                        </Typography>
                        <Button sx={{m_l: 0, p: 1}} startIcon={<GroupIcon/>}></Button>
                        <Button sx={{m_l: 0, p: 1}} startIcon={<PersonAddIcon/>}></Button>
                    </Stack>


                    <Box sx={{
                        width: 300,
                        height: 300,
                        marginTop: 8,
                        bgcolor: 'primary.main'
                    }}>
                        <Typography component="h4" variant="h6" margin={1} padding={2}>
                            Основные сведения:
                        </Typography>
                        <Typography component="h4" variant="h6" margin={1} padding={2}>
                            Описание:
                        </Typography>

                    </Box>

                    <Button
                        variant="contained"
                        type="button"
                        fullWidth
                        sx={{mt: 3, mb: 2}}
                    >
                        Редактировать
                    </Button>

                </Box>
            </Container>
        </ThemeProvider>
    )
        ;
}


export default ProfileForm;