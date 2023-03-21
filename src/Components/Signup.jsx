import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
        <p className="py-2">
          Already have an account?{" "}
          <Link to="/" className="underline">
            Sign In.
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
