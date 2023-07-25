import React from "react";
import './Tweetbox.css';
import {Button} from "@mui/material";
import {Avatar} from "@mui/material";
function Tweetbox()
{
    return (
    <div className="tweetbox">
    <form>
        <div className="tweetbox_input">
        <Avatar >A</Avatar>
            <input placeholder="whats happening" type="text">
            </input>
        </div>
        <input 
        className="tweetbox_imageinput"
        placeholder="Optional: Enter image url" type="text"></input>
        <Button className="tweetbox_tweetbutton">Tweet</Button>
    </form>
    </div>);
}

export default Tweetbox;