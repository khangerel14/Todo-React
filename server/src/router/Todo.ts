import express from "express";
import { createTodo, deleteTodoById, getAllTodo, getAllTodoById, getTodo } from "../controller/Todo";

const todo = express.Router();

todo.route('/create').post(createTodo);
todo.route('/getAllTodo').get(getAllTodo);
todo.route('/id').get(getTodo).get(getAllTodoById);
todo.route('/deleteById/id').delete(deleteTodoById)

export { todo }