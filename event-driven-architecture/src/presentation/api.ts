import { app } from "./express-app";
import { SERVER_PORT } from "../constants";
import { createUid } from "../utils";
import { PetDB } from "../persistence/db";

app.post("/pet", async (req, res) => {
  const id = createUid();
  await PetDB.createOne({
    id,
    ...req.body,
    points: 0,
    rank: 0,
  });
  res.status(200).send(id);
});

app.put("/upvote/:id", async (req, res) => {
  // const points = await upvotePet(req.params.id);
  // res.send(points.toString());
});

app.put("/downvote/:id", async (req, res) => {
  // const points = await downvotePet(req.params.id);
  // res.send(points.toString());
});

export const startServer = () => {
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
  });
};
