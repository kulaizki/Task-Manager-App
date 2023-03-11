const express = require('express');
const app = express();

const db = require('./server/models');

const { Task } = require('./server/models');

const taskRouter = require('./server/routes/taskRoute');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/task', taskRouter);

db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log('server running on port 3001');
  });
});
