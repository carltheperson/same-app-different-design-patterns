import { Request, Response } from "express";
import { petCreationController } from "../controllers/pet-creation";

export const petCreationAPIView = async (req: Request, res: Response) => {
  await petCreationController(req.body);
};
