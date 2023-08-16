import React, { useState } from 'react';

import Daisy from "../images/Daisy.png";
import Featured from "../images/pexels-ketut-subiyanto-4350223.jpg";
import '../styles/Sidebar.css';

export default function Sidebar () {

    const [expand, setExpand] = useState(false);

    const handleExpandButton = () => {

        setExpand(!expand);
    }

    return(
        <nav style={{ width: expand ? 500 : 245  + "px" }}>
            <img src={Daisy} id="Profile"/>
            <span id="Name"> Lorem Ipsum </span>

            <a href="www.facebook.com"> 
                <img src={Daisy} />
                Chats
            </a>
            <a href="www.facebook.com"> 
                <img src={Daisy} />
                Groups
            </a><a href="www.facebook.com"> 
                <img src={Daisy} />
                Archives
            </a><a href="www.facebook.com"> 
                <img src={Daisy} />
                Requests
            </a>

            <img src={Daisy} className="hideButton" onClick={handleExpandButton} />
        </nav>
    );
}