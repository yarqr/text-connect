import React, { useEffect, useState } from "react";
import Input from "../../UI/Input/Input.jsx";
import "./Form.css";
import Button from "../../UI/Button/Button.jsx";
import "../ButtonsList/ButtonsList.css";
export default function Form(props) {
  let [status, setStatus] = useState("ENTER");
  let [value, setValue] = useState("");
  const url = "#";
  function reg() {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ mode: status }),
    });
  }
  return (
    <section className="Form">
      <Input placeholder={`${status} YOUR LOGIN`} />
      <Input placeholder={`${status} YOUR PASSWORD`} />
      <section className="ButtonsList">
        <Button
          text={"ENTER"}
          cl={"BiggerButton"}
          onClick={() => props.auth(true)}
        />
        <Button
          text={"SIGN IN"}
          cl={"Button"}
          onClick={() => setStatus("ENTER")}
          state={status === "ENTER"}
        />
        <Button
          text={"SIGN UP"}
          cl={"Button"}
          onClick={() => setStatus("CREATE")}
          state={status === "CREATE"}
        />
      </section>
    </section>
  );
}
