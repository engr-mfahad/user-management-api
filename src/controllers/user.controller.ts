import { Request, Response } from "express";
import User from "../models/user.model";

const users: User[] = [];

export const create = async (req: Request, res: Response) => {
  const payload: User = req.body;
  users.push(payload);
  try {
    res.status(201).json(payload);
  } catch (error) {
    res.status(400);
  }
};

export const list = async (req: Request, res: Response) => {
  try {
    res.json(users);
  } catch (error) {
    res.status(400);
  }
};

export const get = async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  try {
    if (!id) return res.status(404);
    const user = users.find((user) => user.id == id);
    res.json(user);
  } catch (error) {
    res.status(400);
  }
};

export const purge = async (req: Request, res: Response) => {
  const { id }: { id?: string } = req.params;
  try {
    const idx: number = users.findIndex((user) => user.id == id);
    if (idx > -1) users.splice(idx, 1);
    res.sendStatus(200);
  } catch (error) {
    res.status(400);
  }
};
