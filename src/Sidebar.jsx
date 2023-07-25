import react from "react";
import "./Sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar()
{

    return(
        <div className="sidebar">
        <TwitterIcon className="sidebar-twittericon" />
        <Sidebaroptions active text="Home" Icon={HomeIcon}/>
        <Sidebaroptions text="Explore" Icon={SearchIcon}/>
        <Sidebaroptions text="Notification" Icon={NotificationsNoneIcon}/>
        <Sidebaroptions text="Message" Icon={MailOutlineIcon}/>
        <Sidebaroptions text="Bookmarks" Icon={BookmarkBorderIcon}/>
        <Sidebaroptions text="Lists" Icon={ListAltIcon}/>
        <Sidebaroptions text="Profile" Icon={PermIdentityIcon}/>
        <Sidebaroptions text="more" Icon={MoreHorizIcon}/>
        <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet </Button>
        </div>
    ) ;
}

export default Sidebar;