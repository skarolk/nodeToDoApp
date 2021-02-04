const Todos = require("../models/todoModel");

const starterTodos = [
  {
    username: "bob ross",
    todo: "have happy accidents",
    isDone: false,
    hasAttachment: false,
  },
  {
    username: "bob ross",
    todo: "beat the devil out of it",
    isDone: false,
    hasAttachment: false,
  },
  {
    username: "bob ross",
    todo: "pet my squirrel",
    isDone: false,
    hasAttachment: false,
  },
];

const generateSeeds = (app) => {
  app.get("/api/setupTodos", (req, res) => {
    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};

module.exports = { generateSeeds };
