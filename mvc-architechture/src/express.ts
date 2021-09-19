import express from "express";
import { leaderboardView } from "./views/leaderboard";
import { petCreationAPIView } from "./views/pet-creationg";
import { downvoteAPIView, upvoteAPIView } from "./views/voting";

export const app = express();

app.use(express.json());

app.get("/", leaderboardView);
app.post("/pet", petCreationAPIView);
app.put("/upvote/:id", upvoteAPIView);
app.put("/downvote/:id", downvoteAPIView);
