const sequelize = require("../config/connection");
const { User, Task } = require("../models");

const router = require("express").Router();

// GET users/1  ---> get user by id
router.get("/:id", (req, res) => {
  User.findAll({
    where: {
      id: req.params.id,
    },
    attributes: [
      "username",
      "email",
    ],
    include: [
      {
        model: Task,
        attributes: ["id", "title", "description", "due_date", "task_tag"],
      },
    ],
  })
    .then((dbUserData) => {
      const users = dbUserData.map((user) => user.get({ plain: true }));
      res.json(dbUserData);
    })
    .catch((err) => {
      //Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /users --> create a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        //res.json(dbUserData);
        res.json({
          user: dbUserData,
          message: "You are now logged in!",
        });
      });
    })
    .catch((err) => {
      // Server error
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /users/1   ---> Update a user's info by id
router.put("/:id", (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

// DELETE /api/users/1 --->  Delete user by ID
router.delete( "/:id", (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
);

// POST /users/login  login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
 
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    // Sessions acting very buggy
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json({
        user: dbUserData,
        message: "You are now logged in!",
      });
    });
  })
  .catch(error=> {
    console.log(error);
    res.status(500).json(error);
  })
});
// Route to see if you are logged in
// TODO: This is quirky and returns the cookie object not the user info tagged
// to it
router.post("/loggedIn", (req, res) => {
 
  //res.status(200).json({ "user_id"  : req.session.user_id,"loggedIn": req.session.loggedIn} );  
  res.status(200).json(req.session );  
  });
  
// POST /api/users/logout   Logout
router.post("/logout", (req, res) => {
  // if they are logged in destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    // Already not logged in
    res.status(404).end();
  }
});

module.exports = router;
