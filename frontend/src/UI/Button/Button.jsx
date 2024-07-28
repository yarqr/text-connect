import React from "react";
import "./Button.css";
export default function Button(props) {
  if (props.state) {
    return (
      <button className="Button ENTER" {...props}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className="Button" {...props}>
        {props.text}
      </button>
    );
  }
}
