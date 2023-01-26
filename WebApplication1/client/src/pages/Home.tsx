import React, { ReactElement, FC } from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Home: FC<any> = (): ReactElement => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<SearchIcon />}>
                Search mentor
            </Button>
            <Button variant="contained" endIcon={<SearchIcon />}>
                Search another user
            </Button>
        </Stack>
    );
};

export default Home;