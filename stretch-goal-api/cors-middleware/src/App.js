import React, { useEffect } from "react";
import "./App.css";
import Axios from "axios";

// server.use(express.json());
// server.use(cors());

function App() {
  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://172.20.10.2:8000/api/users",
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
