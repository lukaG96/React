import React from "react";
import { AuthForm } from "../_styledComponents/authForm";

export default function LoginPage() {
  return (
    <AuthForm>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </AuthForm>
  );
}
