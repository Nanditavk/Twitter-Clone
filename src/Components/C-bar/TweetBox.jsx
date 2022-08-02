import React from "react";
import "./TwtBox.css";

import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetInput">
          <Avatar alt="Nindy Baker" src="/static/images/avatar/3.jpg" />
          <input placeholder="Whats happening!!"type="text" fullwidth />
        </div>
        
        <input className="tweetInput-image" placeholder="Enter image URL" type="text" />
        <Button className="tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
export default TweetBox;
