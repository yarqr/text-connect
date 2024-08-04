import { useState } from "react";
import "./App.css";
import React from "react";
import Form from "../components/Form/Form.jsx";
import Title from "../UI/Title/Title.jsx";

function App() {
  let [isAuth, setAuth] = useState(false);
  if (!isAuth) {
    return (
      <div className="App">
        <Title />
        <Form auth={setAuth} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

export default App;
