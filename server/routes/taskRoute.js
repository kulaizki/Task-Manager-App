const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.route('/deleteall').delete(taskController.deleteAllTasks);

router
  .route('/')
  .post(taskController.createTask)
  .get(taskController.displayTasks);

router
  .route('/:id')
  .post(taskController.createTask)
  .get(taskController.displayTask)
  .delete(taskController.deleteTask);

module.exports = router;
