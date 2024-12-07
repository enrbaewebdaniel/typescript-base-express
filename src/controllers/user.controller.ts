import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.send("GET /users");
};

export const createUser = (req: Request, res: Response) => {
  res.send("POST /users");
};
