const Todos = require("../models/todoModel");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // get all todos for user
  app.get("/api/todos/:uname", (req, res) => {
    Todos.find({ username: req.params.uname }, (err, todos) => {
      if (err) throw err;

      res.send(todos);
    });
  });

  // get a specific todo
  app.get("/api/todo/:id", (req, res) => {
    console.log(req);
    Todos.find({ _id: req.params.id }, (err, todo) => {
      if (err) throw err;

      res.send(todo);
    });
  });

  // create or update todo
  app.get("/api/todo", (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        (err, todo) => {
          if (err) throw err;

          res.send("Success");
        }
      );
    } else {
      let newTodo = Todos({
        username: "test",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });

      newTodo.save((err) => {
        res.send("Success");
      });
    }
  });

  app.delete("/api/todo", (req, res) => {
    Todos.findByIdAndRemove(req.body.id, (err) => {
      if (err) throw err;

      res.send("Success");
    });
  });
};
