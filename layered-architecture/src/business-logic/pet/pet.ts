import { PetDB } from "../../presentation/db";
import { Pet } from "../../presentation/models/pet";
import { createUid, PartialBy } from "../../utils";

export const createNewPet = (pet: PartialBy<Pet, "id">) => {
  const id = pet.id ?? createUid();
  PetDB.createOne({
    id,
    ...pet,
  });
  return id;
};

export const upvotePet = async (id: string) => {
  const pet = await PetDB.getOne(id);
  if (!pet) {
    throw new Error(`Unable to upvote. Could not find pet with id ${id}`);
  }

  await PetDB.updateOne({
    id,
    points: pet.points + 1,
  });
};

export const downvotePet = async (id: string) => {
  const pet = await PetDB.getOne(id);
  if (!pet) {
    throw new Error(`Unable to upvote. Could not find pet with id ${id}`);
  }

  await PetDB.updateOne({
    id,
    points: pet.points - 1,
  });
};

export const getRankedPets = async () => {
  const pets = await PetDB.getAll();
  const petsRanked = pets.sort((pet1, pet2) => {
    return pet1.points - pet2.points;
  });
  return petsRanked;
};
