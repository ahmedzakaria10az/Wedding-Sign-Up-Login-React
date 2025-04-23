import React from "react";
import SignUp from "./Components/SignUp";
import Login from './Components/Login'; // استيراد مكون Login


function App() {
  return (
    <div>
      <SignUp />
      <br />
      <hr />
      <Login />
    </div>
    
  );
}

export default App;
