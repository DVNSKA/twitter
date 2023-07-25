import React from "react";
import "./Post.css";
import {Avatar} from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    userName,
    verifed,
    text,
    image
})
{
    return (<div className="Post">

                <div className="post_avatar"><Avatar>A</Avatar></div>
                <div className="post_body">
                <div className="post_header">
                            <div className="post_headertext">
                                <h3>
                                {displayName}{" "}
                                <spam className="post_headerspecial">
                                {verifed && <VerifiedUserIcon className="post_badge" />}@{userName}
                                </spam>
                                </h3>
                            </div>
                                       <div className="post1_description">
                                                <p>
                                                    {text}
                                                </p>
                                                </div>
                                                <img src={image}></img>
                                                <div className="post_foter">
                                                    <ChatBubbleOutlineIcon fontSize="small" />
                                                    <RepeatIcon fontSize="small"/>
                                                    <FavoriteBorderIcon fontSize="small" />
                                                    <PublishIcon fontSize="small"/>
                                                </div>
                                       </div>
                    </div>
                 
            </div>);
}
export default Post;