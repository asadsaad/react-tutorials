import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Auth() {
  const alerts = useSelector((state) => state.alert);
  const [name, setname] = useState("name");

  useEffect(() => {
    console.log("render");
  }, [name]);

  function handleclick() {
    setname("name1");
  }
  return (
    <div>
      {alerts.message}
      second componet <Auth1 />
      {name}
      <button onClick={handleclick}>Button</button>
    </div>
  );
}

function Auth1() {
  return <h1>Bbb</h1>;
}
