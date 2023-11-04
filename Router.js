import React, { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
  };

  return (
    <div>{isSignedUp ? <Login /> : <SignUp onSignUp={handleSignUp} />}</div>
  );
}

export default App;
