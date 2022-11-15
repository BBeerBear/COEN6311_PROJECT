import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
       title: "Home",
       icon: <HomeIcon/>,
       link: "/dashboard"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon/>,
        link: "/profile"
     },
     {
        title: "Logout",
        icon: <LogoutIcon/>,
        // link: "/logout" not sure abt the logout route 
     },
];
   