import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SideBarOptions from "../SideBarOptions/SideBar-Options";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from '@mui/material/Button';
import './L-Bar.css';
function LeftSidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SideBarOptions active Icon={HomeIcon} text="Home" />
      <SideBarOptions Icon={SearchIcon} text="Explore" />
      <SideBarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarOptions Icon={MailOutlineIcon} text="Messages" />
      <SideBarOptions Icon={BookmarkBorderIcon} text="Saves" /> 
      <SideBarOptions Icon={ListAltIcon} text="Lists" /> 
      <SideBarOptions Icon={PermIdentityIcon} text="Profile" /> 
      <SideBarOptions Icon={MoreHorizIcon} text="Messages" /> 
      
      <Button variant='outlined' className='sidebar-twt'fullWidth>Tweet</Button>
      
      {/* <Button variant="outlined" >Outlined</Button> */}
    </div>
  );
}

export default LeftSidebar;