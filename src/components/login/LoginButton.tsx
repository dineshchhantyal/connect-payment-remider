"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  return (
    <button
      className="p-1 rounded-md hover:bg-gray-700 focus:outline-none"
      onClick={() => signIn("google")}
    >
      Sign in
    </button>
  );
};

export default LoginButton;
