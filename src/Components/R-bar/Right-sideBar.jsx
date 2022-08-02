import React from "react";
import './RightBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';

function RightSideBar(){

    return(
        <div className="RightBar">
            <div className="search ">
            <SearchIcon className="searchIcon"/>
            <input className="input1" type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets">
                <p style={{fontWeight: "bold"}}>What's happening</p>
                
                <div className="twittertimeline">
                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="billmaher"
                options={{height:500}}/>
                </div>



            </div>
         

        </div>



    )
}
export default RightSideBar;