import express from "express";
import { signUp, logIn } from "../controller/User";


const auth = express.Router();

auth.route('/signUp').post(signUp)
auth.route('/logIn').post(logIn)

export { auth }