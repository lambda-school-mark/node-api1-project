const express = require("express");
const shortid = require("shortid");

const server = express();
server.use(express.json());

let users = [
  {
    id: shortid.generate(),
    name: "Timoshka",
  },
  {
    id: shortid.generate(),
    name: "Markusha",
  },
];

//api
server.get("/", (req, res) => {
  res.send("hello");
});

//Creates a user using the information sent inside the request body.
server.post("/api/users", (req, res) => {
  const user = req.body;
  user.id = shortid.generate();
  users.push(user);
  res.status(201).json(users);
});

//! Get
//Returns an array users.
server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

//returns user by id
server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  let user = users.find((user) => user.id === id);
  res.status(200).json(user);
});

//! Delete
//Removes the user with the specified id and returns the deleted user.
server.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.status(204).end();
});

//! port
const port = 8000;
server.listen(port, () => console.log(`ye buddy running on ${port}`));
