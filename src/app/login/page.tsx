"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = async () => {
  return (
    <div className="container mx-auto grid place-items-center h-[calc(100vh-100px)]">
      <div>
        <h1 className="text-3xl font-semibold text-center mb-12">Login</h1>
        <button
          className="bg-gray-300 p-3 rounded-lg hover:bg-gray-400 font-medium text-gray-700 inline-flex items-center gap-2 shadow-md hover:text-gray-200"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <FcGoogle size={32} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
