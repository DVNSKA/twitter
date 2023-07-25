import React from "react";
import "./Widges.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
function Widges()
{
    return (
    <div className="widges">
    <div className="widges_input">
        <SearchIcon className="widges_searchicon" />
        <input placeholder="search twitter" type="text"></input>
    </div>
    <div className="widges_widgecontainer">
        <h2>what's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
    </div>
    </div>);
}

export default Widges;