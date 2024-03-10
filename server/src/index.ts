import express from "express";
import { connectDataBase } from "./utils/database";
import { auth } from "./router/User";
import { todo } from "./router/Todo";
import cors from "cors";

const PORT = 8000;

const start = () => {
    const app = express();
    app.use(express.json());
    app.use(cors());

    connectDataBase();
    app.use('/auth', auth);
    app.use('/todo', todo)
  
    app.get("/", (req, res) => {
      res.status(200).send({ succes: true, msg: "Hello world" });
    });


    app.listen(PORT, () => {
      console.log("server is running");
    });
};

start();