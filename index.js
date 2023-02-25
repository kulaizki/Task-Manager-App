import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

process.on('uncaughtException', (err) => {
  //any errors in synchronous code
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION');

  process.exit(1);
});

const DB = `TBD`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('connection successful');
  });

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  //rejected promises anywhere in code
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION');
  server.close(() => {
    process.exit(1);
  });
});
