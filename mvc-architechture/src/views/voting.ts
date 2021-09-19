import { Request, Response } from "express";
import { downvoteController, upvoteController } from "../controllers/voting";

export const upvoteAPIView = async (req: Request, res: Response) => {
  await upvoteController(req.params.id);
  res.status(200).send();
};

export const downvoteAPIView = async (req: Request, res: Response) => {
  await downvoteController(req.params.id);
  res.status(200).send();
};
