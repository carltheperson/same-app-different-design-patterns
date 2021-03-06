import { app } from "./express-app";
import {
  createNewPet,
  downvotePet,
  getRankedPets,
  upvotePet,
} from "../business-logic/pet";
import { SERVER_PORT } from "../constants";

app.post("/pet", async (req, res) => {
  await createNewPet(req.body);
  res.status(200).send();
});

app.get("/leaderboard", async (req, res) => {
  const pets = await getRankedPets();
  res.json(pets);
});

app.put("/upvote/:id", async (req, res) => {
  const points = await upvotePet(req.params.id);
  res.send(points.toString());
});

app.put("/downvote/:id", async (req, res) => {
  const points = await downvotePet(req.params.id);
  res.send(points.toString());
});

export const startServer = () => {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });
};
