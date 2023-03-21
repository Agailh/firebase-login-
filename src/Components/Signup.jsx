import React from "react";
import { Route, Routes } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Firebase</h1>
      <Routes>
        <Route path="/" element={<login />} />
      </Routes>
    </div>
  );
};

export default Signup;
