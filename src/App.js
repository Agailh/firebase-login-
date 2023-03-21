import React from "react";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Account from "./Components/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Firebase</h1>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
