const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.route('/').post(taskController.createTask);
router.route('/').get(taskController.displayTasks)

module.exports = router;
