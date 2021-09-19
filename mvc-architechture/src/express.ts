import express from "express";
import { SERVER_PORT } from "./constants";
import { leaderboardView } from "./views/leaderboard";
import { petCreationAPIView } from "./views/pet-creationg";
import { downvoteAPIView, upvoteAPIView } from "./views/voting";

export const app = express();

app.use(express.json());

app.get("/", leaderboardView);
app.post("/pet", petCreationAPIView);
app.put("/upvote/:id", upvoteAPIView);
app.put("/downvote/:id", downvoteAPIView);

export const startServer = () => {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });
};
