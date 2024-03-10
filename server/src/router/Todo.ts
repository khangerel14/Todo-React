import express from "express";
import { createTodo, getAllTodo, getAllTodoByUserId, getTodo } from "../controller/Todo";

const todo = express.Router();

todo.route('/').post(createTodo);
todo.route('/getAllTodo').get(getAllTodo);
todo.route('/id').get(getTodo).get(getAllTodoByUserId)

export { todo }