import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};
