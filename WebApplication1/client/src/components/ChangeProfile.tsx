import * as React from 'react';
import {makeStyles, Theme, createStyles} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button, FormControl, FormGroup, FormLabel, Grid} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import {profileRepository} from "../repositories/ProfileRepository";
import {ProfileInput} from "../objects/ProfileInput";
import authRepository from "../repositories/AuthRepository";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {ProfileInfo} from "../objects/ProfileInfo";

export default function CheckboxesGroup() {

    const navigate = useNavigate();
    const [profile, setProfile] = useState<ProfileInfo>();

    const descriptionRef: React.RefObject<HTMLInputElement> = React.createRef();
    const interestsRef: React.RefObject<HTMLInputElement> = React.createRef();
    const knowledgeRef: React.RefObject<HTMLInputElement> = React.createRef();
    const mentorSearchStatusRef: React.RefObject<HTMLInputElement> = React.createRef();
    const mentorStatusRef: React.RefObject<HTMLInputElement> = React.createRef();
    const searchStatusRef: React.RefObject<HTMLInputElement> = React.createRef();
    
    useEffect(() => {
        profileRepository
            .getProfile()
            .then((data) => {
                setProfile(data);
            })
    }, []);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            interests: data.get('interests'),
            knowledge: data.get('knowledge'),
            description: data.get('description'),
            toTalk: data.get('toTalk'),
            searchMentor: data.get('searchMentor'),
            mentor: data.get('mentor')
        });

        const profileInput: ProfileInput = {
            description: data.get("description")?.toString() ?? "",
            interests: data.get('interests')?.toString() ?? "",
            knowledge: data.get('knowledge')?.toString() ?? "",
            mentorSearchStatus: data.get('searchMentor') != null,
            mentorStatus: data.get('mentor') != null,
            searchStatus: data.get('toTalk') != null

        };
        profileRepository
            .updateProfile(profileInput)
            .finally(() => {
                navigate("/profile");
            });
    };

    return (
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <Typography component="h1" variant="h4" align="center">
                    Редактирование
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked={(profile?.userProfile?.searchStatus === true)} id="toTalk" name="toTalk"/>}
                                                  label="Ищу собеседника"/>
                                <FormControlLabel control={<Checkbox defaultChecked={(profile?.userProfile?.mentorSearchStatus === true)} id="searchMentor" name="searchMentor"/>}
                                                  label="Ищу ментора"/>
                                <FormControlLabel control={<Checkbox defaultChecked={(profile?.userProfile?.mentorStatus === true)} id="mentor" name="mentor"/>} label="Ментор"/>
                            </FormGroup>

                            <Box>
                                <TextField
                                    id="interests"
                                    name="interests"
                                    label="Интересы"
                                    variant="standard"
                                    fullWidth type="text"
                                    margin="normal"
                                />
                                <TextField
                                    id="knowledge"
                                    name="knowledge"
                                    label="Знания"
                                    variant="standard"
                                    fullWidth type="text"
                                    margin="normal"
                                />
                                <TextField
                                    id="description"
                                    name="description"
                                    label="Описание"
                                    variant="standard"
                                    fullWidth type="text"
                                    margin="normal"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Change profile
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}