"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return <button onClick={() => signIn("google")}>Sign in</button>;
};

export default Login;
