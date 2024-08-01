import React from "react";
import "./Button.css";
export default function Button(props) {
  if (props.state) {
    return (
      <button className={props.cl + " ENTER"} {...props}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className={props.cl} {...props}>
        {props.text}
      </button>
    );
  }
}
