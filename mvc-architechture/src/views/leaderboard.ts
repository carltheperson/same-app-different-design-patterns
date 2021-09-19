import { Request, Response } from "express";
import { getLeaderboardHTMLController } from "../controllers/leaderboard";

export const leaderboardView = async (req: Request, res: Response) => {
  const html = getLeaderboardHTMLController();
  res.send(html);
};
