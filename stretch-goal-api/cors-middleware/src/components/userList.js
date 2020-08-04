import React, { useEffect } from "react";
import axios from "axios";
const cors = require("cors");

server.use(cors());
server.use(express.json());

const userList = () => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
};
export default userList;
