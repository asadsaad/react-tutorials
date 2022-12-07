import React from "react";
import { LoginHeader } from "./loginheader";
import NotLoginHeader from "./notloginheader";

export default function TopNav({ auth, setauth }) {
  return (
    <div>{auth?.isAuthenticated ? <LoginHeader /> : <NotLoginHeader />}</div>
  );
}
