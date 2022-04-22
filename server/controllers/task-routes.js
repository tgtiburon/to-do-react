
const sequelize = require('../config/connection');
const { User, Task } = require('../models');
//const { User, Task} = require('../models');

const router = require('express').Router();



//  GET   /tasks/:id  ---> Get tasks by userid


router.get('/:id', (req, res) => {

    Task.findAll({
      where: {
        user_id: req.params.id
      },
        //Query config
        attributes: [
          'id', 
          'title',
          'description',
          'due_date',
          'user_id',
          'task_tag'
        ],
        // We could use 
      //  order: [['created_at', 'DESC']],
        // include: [
  
        //     {
        //       model: Comment,
        //       attributes: [
        //         'id', 
        //         'comment_body',
        //         'post_id',
        //         'user_id',
        //         'created_at'
        //       ],
        //       // Attach the username to the comment
        //       include: {
        //         model:User,
        //         attributes: ['username']
        //       }

        //     },
        //     {   // User who posted
        //         model: User, 
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
        // Server error                       
        console.log(err);
        res.status(500).json(err);
    });
});



// POST /tasks  ---> Create a new task

router.post('/',/*withAuth,*/ (req, res) => {
  Task.create({
    
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date,
    //user_id: req.session.user_id,
    user_id: req.body.user_id,
    task_tag: req.body.task_tag
  })
    .then(dbTaskData =>  {
        res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});




// PUT /tasks/:id  ---> Update a task by id

router.put('/:id',/*withAuth,*/ (req, res) => {
  Task.update(
  
    {
    
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date,
    //user_id: req.session.user_id,
    user_id: req.body.user_id,
    task_tag: req.body.task_tag
  },
  {
    where: {
      id: req.params.id
    }
  }
  )
    .then(dbTaskData =>  {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id!'});
        return;
      }
        res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





// DELETE /task/:id  ---> Delete a task by id

router.delete('/:id', (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});





module.exports = router;