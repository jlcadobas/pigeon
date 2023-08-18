import React, { useState } from 'react';

import Daisy from "../images/Daisy.png";
import Chats from "../images/chats.png";
import Groups from "../images/groups.png";
import Archives from "../images/archives.png";
import Requests from "../images/requests.png";
import Featured from "../images/pexels-ketut-subiyanto-4350223.jpg";

import '../styles/Sidebar.css';

export default function Sidebar ({expand, onClick}) {

    return(
        <nav>
            <img src={Daisy} id="Profile"/>
            <span id="Name" style={{ display: expand ? "block" : "none" }}> Lorem Ipsum </span>

            <a href="www.facebook.com" className={expand ? "" : "removeWidth"} > 
                <img src={Chats} className={expand ? "" : "removeMargin"}/>
                {expand ? "Chats" : null}
            </a>
            <a href="www.facebook.com" className={expand ? "" : "removeWidth"}> 
                <img src={Groups} className={expand ? "" : "removeMargin"} />
                {expand ? "Groups" : null}
            </a>
            <a href="www.facebook.com" className={expand ? "" : "removeWidth"}> 
                <img src={Archives} className={expand ? "" : "removeMargin"} />
                {expand ? "Archives" : null}
            </a>
            <a href="www.facebook.com" className={expand ? "" : "removeWidth"}> 
                <img src={Requests} className={expand ? "" : "removeMargin"} />
                {expand ? "Requests" : null}
            </a>

            <img src={Daisy} className="hideButton" onClick={onClick} />
        </nav>
    );
}