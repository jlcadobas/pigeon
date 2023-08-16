import { useState } from 'react';
import './App.css';

import Daisy from './images/Daisy.png';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Conversation from './components/Conversation';

export default function App() {

  // useState variables
  const [signIn, setSignIn] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle changes for input tags
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Name: ${name}, Email: ${email}, Password: ${password} `);
  }

  // Keeps track whether the user wants to sign in or create an account.
  const handleSignInStatus = () => {
    setSignIn(!signIn);
  }

  return (
    // <div className="App">
    //   <section> </section>
      
    //   <section>
    //     <img src={Daisy} />
    //     <h1> Connect with  your circle. </h1>
    //     <p> Create an account now and message them! </p>

    //     <form>
    //       <input 
    //         type="text" placeholder="Name" value={name}
    //         style={{ display: signIn ? "none" : "block" }}
    //         onChange={handleNameChange}
    //         required />

    //       <input 
    //         type="email" placeholder="Email" value={email}
    //         onChange={handleEmailChange}
    //         required /> 

    //       <input 
    //         type="password" placeholder="Password" value={password}
    //         onChange={handlePasswordChange}
    //         required />

    //       <button type="submit" onClick={handleSubmit}> {signIn ? "Sign In" : "Create Account"} </button>

    //       <p> {signIn ? "Don't have an account?" : "Already have an account?"}
    //         <span onClick={handleSignInStatus}> Click here instead.</span>
    //       </p>
    //     </form>
    //   </section>
    // </div>
    <div className="App">
      <Sidebar />
      <Chat />
      <Conversation />
    </div>
  );
}