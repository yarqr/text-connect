import React, { useState } from "react";
import Button from "../../UI/Button/Button.jsx";
import "./ButtonsList.css";
export default function ButtonsList() {
  return (
    <section className="ButtonsList">
      <Button text={"ENTER"} />
      <Button text={"SIGN IN"} />
      <Button text={"SIGN UP"} />
    </section>
  );
}
