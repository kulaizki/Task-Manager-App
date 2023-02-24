import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Task must have a name'],
      unique: false,
      trim: true,
    },
    dateStarted: {
      type: Date,
      required: [true, 'Task must have a start date'],
      unique: false,
      default: Date.now(),
    },
    isFinished: {
      type: Boolean,
      required: [true, 'Task must have this field'],
      default: false,
    },
    deadline: {
      type: Date,
      required: false,
      unique: false,
      default: Date.now(),
    },
    startDates: [Date],
    deadlines: [Date],
    pendingTasks: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
