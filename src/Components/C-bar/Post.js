import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import {  TwitterTweetEmbed} from 'react-twitter-embed';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar alt="Nindy Baker"/>
        <h1 className="name">Nandita</h1>
        
       <VerifiedIcon className="iconV"/>
        
        <div className="userName">@Nandita</div>
      </div>
      <div className="text">
      
      <p >Shop from a wide range of t-shirt from orianz. Pefect for
                      your everyday use, you could pair it with a stylish pair
                      of jeans or trousers complete the look. </p>
              </div>
              <div className="col"><img
              src="https://images.unsplash.com/profile-1607965053714-fcc3d79a9d24image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=220&h=220"
              className="d-block w-90 h-90"
              alt="img"
            /></div> 
            <div className="postFooter">
            <div className="icons">
              <ChatBubbleOutlineIcon fontSize="xsmall"/>
              <RepeatIcon fontSize="xsmall"/>
              <FavoriteBorderIcon fontSize="xsmall"/>
              <PublishIcon fontSize="xsmall"/>
              </div>             
            </div>   

            
            <div className="post2">
            <TwitterTweetEmbed tweetId={"463440424141459456"} />
            </div>

    </div>
  );
}

export default Post;
