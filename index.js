const express = require("express");
const shortid = require("shortid");

const server = express();
server.use(express.json());

let users = [
  {
    id: shortid.generate(),
    name: "Timoshka",
    bio: "Prosto agurchik",
  },
  {
    id: shortid.generate(),
    name: "Markusha",
    bio: "tipa coder",
  },
];

//!Post
//Creates a user using the information sent inside the request body.
server.post("/api/users", (req, res) => {
  try {
    const user = req.body;
    if (user.name && user.bio) {
      user.id = shortid.generate();
      users.push(user);
      res.status(201).json(users);
    } else {
      res.status(400).json({ message: "you must have name and bio" });
    }
  } catch {
    res.status(500).json({
      errorMessage: "There was an error while saving the user to the database",
    });
  }
});

//! Get
//api call
server.get("/", (req, res) => {
  res.send("hello");
});

//Returns an array users.
server.get("/api/users", (req, res) => {
  try {
    res.status(200).json(users);
  } catch {
    res
      .status(500)
      .json({ errorMessage: `The users information could not be retrieved.` });
  }
});

//returns user by id
server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  let user = users.find((user) => user.id === id);
  try {
    if (user === id) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User with that id does not exist" });
    }
  } catch {
    res.status(500).json({
      errorMessage: `There was an error while saving to database`,
    });
  }
});

//! Delete
//Removes the user with the specified id and returns the deleted user.
server.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);

  try {
    if (users) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "User with that id does not exist" });
    }
  } catch {
    res.status(500).json({
      errorMessage: `The user could not be removed`,
    });
  }
});

//! Put
//Updates the user with the specified id using data from the request body. Returns the modified user.
server.put("/api/users/:id", (req, res) => {
  try {
    const id = req.params.id;
    const changes = req.body;

    let found = users.find((user) => user.id === id);

    if (found) {
      if (changes.name || changes.bio) {
        Object.assign(found, changes);
        res.status(200).json(users);
      } else {
        res
          .status(400)
          .json({ message: "Please provide name and bio for the user." });
      }
    } else {
      res
        .status(404)
        .json({ message: "The user with the specified ID does not exist." });
    }
  } catch {
    res.status(500).json({
      errorMessage: `The user information could not be modified.`,
    });
  }
});

//! port
const port = 8000;
server.listen(port, () => console.log(`ye buddy running on ${port}`));
