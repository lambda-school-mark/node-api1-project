import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/api/users",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.message);
    });
  }, []);

  return (
    <div className="App">
      <h2>hello</h2>
    </div>
  );
}

export default App;
