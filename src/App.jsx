

import React from "react";
import "./App.css"; // Corrected import path
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
