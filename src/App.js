import React from "react";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Account from "./Components/Account";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="text-center text-3xl font-bold">Firebase</h1>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/" element={<Signup />} />
          <Route path="/" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
