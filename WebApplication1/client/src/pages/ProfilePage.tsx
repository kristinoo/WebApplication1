import React, {FC, ReactElement} from "react";
import {useState} from "react";
import {Button, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const ProfilePage: FC<any> = (): ReactElement => {
    
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<PersonSearchIcon/>}>
                Search mentor
            </Button>
            <Button variant="contained" startIcon={<SupervisedUserCircleIcon/>}>
                Search another user
            </Button>
        </Stack>
    );
};

export default ProfilePage;
