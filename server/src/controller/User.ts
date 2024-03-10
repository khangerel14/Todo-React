import { Request, Response } from "express";
import { UserModel } from "../model/User";
import bcrypt from "bcrypt";

type SignUpType = {
  username: string;
  password: string;
  avatarImage: string;
};

type UserType = {
  username: string;
  password: string;
  avatarImage: string;
};

export const signUp = async (req: Request, res: Response) => {
    const { username, password }: Required<SignUpType> = req.body;

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      try {
        const result = await UserModel.create({ username, password: hash });
        console.log(result);
        return res.status(201).send({ success: true });
      } catch (error) {
        return res.status(400).send({
          success: false,
          error: {
            msg: "Already existing username",
            code: error,
          },
        });
        // throw new Error(JSON.stringify(error))
      }
    });
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;

    const user: UserType | null = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found" });
    }

    bcrypt.compare(password, user.password, async function (err, result) {
      if (!result) {
        return res.send({
          success: false,
          msg: "Username or Password incorrect",
        });
      } else {
        return res.send({ success: true });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
