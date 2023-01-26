import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {Box} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import {Button, Icon, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import {ProfileInfo} from "../objects/ProfileInfo";
import {profileRepository} from "../repositories/ProfileRepository";


const ProfileForm = () => {

    const params = useParams();
    const [profile, setProfile] = useState<ProfileInfo>();

    useEffect(() => {
        profileRepository
            .getProfile(params['*'])
            .then((data) => {
                setProfile(data);
            })
    }, []);

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
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Avatar sx={{m: 0, bgcolor: 'primary.main'}}>
                                <Avatar src="/broken-image.jpg"/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                {profile?.loginName ?? "..."}
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2} padding={2} margin={3}>

                            {(profile?.userProfile?.mentorSearchStatus ?? false) && <Grid spacing={3}><GroupIcon/></Grid>}
                            {(profile?.userProfile?.mentorStatus ?? false) && <Grid spacing={3}><PersonAddIcon/></Grid>}
                            {(profile?.userProfile?.searchStatus  ?? false) && <Grid spacing={3}><MarkChatReadIcon/></Grid>}

                        </Stack>
                    </Box>
                    
                    <Box sx={{
                        width: 300,
                        height: 300
                    }}>
                        <Typography component="h4" variant="h6" margin={1} padding={2}>
                            Интересы: {profile?.userProfile?.interests}
                        </Typography>
                        <Typography component="h4" variant="h6" margin={1} padding={2}>
                            Знания: {profile?.userProfile?.knowledge}
                        </Typography>
                        <Typography component="h4" variant="h6" margin={1} padding={2}>
                            Описания: {profile?.userProfile?.description}
                        </Typography>
                    </Box>

                    {(params['*'] === "") && <Button
                        variant="contained"
                        type="button"
                        fullWidth
                        sx={{mt: 3, mb: 2}}
                        href="/edit"
                    >
                        Редактировать
                    </Button>}
                </Box>
            </Container>
        </ThemeProvider>
    );
}
export default ProfileForm;