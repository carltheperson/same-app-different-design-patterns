import { eventEmitter } from "../events";
import { PetDB } from "../persistence/db";

eventEmitter.on("upvotePet", async (id) => {
  const newPoints = await updatePetPoints(id, +1);
  eventEmitter.emit("aPetHasUpdatedPoints");
});

eventEmitter.on("downvotePet", async (id) => {
  const newPoints = await updatePetPoints(id, -1);
  eventEmitter.emit("aPetHasUpdatedPoints");
});

const updatePetPoints = async (id: string, pointUpdate: number) => {
  const pet = await PetDB.getOne(id);
  if (!pet) {
    throw new Error(`Could not find pet with id ${id}`);
  }

  const newPoints = pet.points + pointUpdate;
  await PetDB.updateOne({
    id,
    points: newPoints,
  });
  return newPoints;
};
