import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,

});
export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);



