import { PetDB } from "../persistence/db";
import { createUid } from "../utils";

export const createNewPet = async (pet: { name: string; imageUrl: string }) => {
  const id = createUid();
  await PetDB.createOne({
    id,
    ...pet,
    points: 0,
  });
  return id;
};

export const upvotePet = async (id: string) => {
  const pet = await PetDB.getOne(id);
  if (!pet) {
    throw new Error(`Unable to upvote. Could not find pet with id ${id}`);
  }
  const points = pet.points + 1;
  await PetDB.updateOne({
    id,
    points,
  });
  return points;
};

export const downvotePet = async (id: string) => {
  const pet = await PetDB.getOne(id);
  if (!pet) {
    throw new Error(`Unable to upvote. Could not find pet with id ${id}`);
  }
  const points = pet.points - 1;
  await PetDB.updateOne({
    id,
    points,
  });
  return points;
};

export const getRankedPets = async () => {
  const pets = await PetDB.getAll();
  const petsRanked = pets.sort((pet1, pet2) => {
    return pet2.points - pet1.points;
  });
  return petsRanked;
};
