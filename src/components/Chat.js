import React from "react";

import "../styles/Chat.css";
import Daisy from "../images/Daisy.png";

export default function Chat() {

    return(
        <div className="parentChatDiv">
            <div>
                <h2> Chats </h2>
                <input type="search" placeholder="Search for a contact" />
            </div>
            <div className="chatList">
                <div className="chatListItem" id="userID">
                        <img src={Daisy} id="userProfile"/>
                        <div id="userChatInfo">
                            <h4> Lorem Ipsum </h4>
                            <p> Some message displayed here. </p>
                        </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
                <div className="chatListItem" id="userID">
                    <img src={Daisy} id="userProfile"/>
                    <div id="userChatInfo">
                        <h4> Lorem Ipsum </h4>
                        <p> Some message displayed here. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}