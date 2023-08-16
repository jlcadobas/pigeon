
import React from 'react';

import Daisy from "../images/Daisy.png";
import "../styles/Conversation.css";

export default function Conversation() {

    const imageSent = (event) => {
        alert("Message Sent!");
    }
    
    return(
        <div>
            <div className="header"> 
                <img src={Daisy} />
                <h3 id="userName"> Lorem Ipsum </h3>
            </div>
            <div className="body">
                <p className="message"> Hello, world! How are you? </p>
                <p className="message"> Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? </p>
                <p className="reply"> Hi, I'm doing fine. How about you? </p>
                <p className="message"> Hello, world! How are you? </p>
                <p className="message"> Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? Hello, world! How are you? </p>
                <p className="reply"> Hi, I'm doing fine. How about you? </p>
            </div>
            <form>
                <input type="text" className="chatbox" placeholder="Send a message here."/>
                <img src={Daisy} onClick={imageSent} />
            </form>
        </div>
    );
}

