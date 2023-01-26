
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
export default function CheckboxesGroup() {
    const [state, setState] = React.useState({
        "ищу собеседника": true,
        "хочу быть ментором": false,
        "ищу ментора": false,
    });

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
    };

    return (
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                <Typography component="h1" variant="h4" align="center">
                    Редактирование
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    < Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox id="toTalk"/>} label="Ищу собеседника"/>
                                <FormControlLabel control={<Checkbox id="searchMentor"/>} label="Ищу ментора"/>
                                <FormControlLabel control={<Checkbox id="mentor"/>} label="Ментор"/>
                            </FormGroup>

                            <Box>
                                <TextField
                                    id="interests"
                                    label="Интересы"
                                    variant="standard"
                                    fullWidth type="password"
                                    margin="normal"
                                    required
                                    name="интересы"
                                />
                                <TextField
                                    id="knowledge"
                                    label="Знания"
                                    variant="standard"
                                    fullWidth type="password"
                                    margin="normal"
                                    required
                                    name="знания"
                                />
                                <TextField
                                    id="description"
                                    label="Описание"
                                    variant="standard"
                                    fullWidth type="password"
                                    margin="normal"
                                    required
                                    name="описание"
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