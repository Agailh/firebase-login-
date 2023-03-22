import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./Components/Account";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Firebase</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
