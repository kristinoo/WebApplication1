import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {BottomNavigation, BottomNavigationAction, Button, Stack} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import {Person} from "@mui/icons-material";
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(10),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext);
    return (

        <AppBar position="static">
            <Toolbar>   
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                    <Link to="/">
                        WebApp
                    </Link>
                </Typography>

                <IconButton href="/profile" sx={{"--IconButton-size": "65px", color:"white"}}> <PersonIcon/></IconButton>
                <IconButton href="/history" sx={{"--IconButton-size": "65px", color:"white"}}> <HistoryIcon/></IconButton>
                <IconButton onClick={()=>{logout()
                    .then((data) => {
                            navigate("/auth");
                    });}} sx={{"--IconButton-size": "65px", color:"white"}}> <LogoutIcon/></IconButton>
                
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
                
            </Toolbar>
        </AppBar>
    );
}

function setValue(newValue: any) {
    throw new Error('Function not implemented.');
}

