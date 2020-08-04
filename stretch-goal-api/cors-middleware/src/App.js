import React, { useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:8000/api/users",
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <h2>hello</h2>
    </div>
  );
}

export default App;
