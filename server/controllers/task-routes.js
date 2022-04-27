const sequelize = require("../config/connection");
const { User, Task } = require("../models");

const router = require("express").Router();

//  GET   /tasks/:id  ---> Get tasks by userid
router.get("/:id", (req, res) => {
  Task.findAll({
    where: {
      user_id: req.params.id,
    },
    //Query config
    attributes: [
      "id",
      "title",
      "description",
      "due_date",
      "user_id",
      "task_tag",
    ],
  })
    .then((dbTaskData) => {
      res.json(dbTaskData);
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// Sort by title ascending
//  GET   /tasks/:id  ---> Get tasks by userid
router.get("/title_a/:id", (req, res) => {
  console.log(req.session.loggedIn);
  Task.findAll({
    where: {
      user_id: req.params.id,
    },
    //Query config
    attributes: [
      "id",
      "title",
      "description",
      "due_date",
      "user_id",
      "task_tag",
    ],
    order: [["title", "ASC"]],
  })
    .then((dbTaskData) => {
      res.json(dbTaskData);
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// Sort by title descending
//  GET   /tasks/:id  ---> Get tasks by userid
router.get("/title_d/:id", (req, res) => {
  console.log(req.session.loggedIn);
  Task.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "due_date",
      "user_id",
      "task_tag",
    ],
    order: [["title", "DESC"]],
  })
    .then((dbTaskData) => {
      res.json(dbTaskData);
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// Sort by due_date ascending
//  GET   /tasks/:id  ---> Get tasks by userid
router.get("/date_a/:id", (req, res) => {
  console.log(req.session.loggedIn);
  Task.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "due_date",
      "user_id",
      "task_tag",
    ],
    order: [["due_date", "ASC"]],
  })
    .then((dbTaskData) => {
      res.json(dbTaskData);
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// Sort by due_date descending
//  GET   /tasks/:id  ---> Get tasks by userid
router.get("/date_d/:id", (req, res) => {
  Task.findAll({
    where: {
      user_id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "due_date",
      "user_id",
      "task_tag",
    ],
    order: [["due_date", "DESC"]],
  })
    .then((dbTaskData) => {
      res.json(dbTaskData);
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /tasks  ---> Create a new task
router.post( "/", (req, res) => {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
      user_id: req.body.user_id,
      task_tag: req.body.task_tag,
    })
      .then((dbTaskData) => {
        res.json(dbTaskData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

// PUT /tasks/:id  ---> Update a task by id
router.put("/:id", (req, res) => {
  Task.update(
    {
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
      user_id: req.body.user_id,
      task_tag: req.body.task_tag,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No task found with this id!" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /task/:id  ---> Delete a task by id
router.delete("/:id", (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTaskData) => {
      if (!dbTaskData) {
        res.status(404).json({ message: "No task found with this id" });
        return;
      }
      res.json(dbTaskData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
