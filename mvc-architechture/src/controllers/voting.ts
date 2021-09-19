import { Pet } from "../models/pet";

export const upvoteController = async (petId: string) => {
  const pet = await Pet.getFromID(petId);
  pet.upvote();
  await pet.save();
};

export const downvoteController = async (petId: string) => {
  const pet = await Pet.getFromID(petId);
  pet.downvote();
  await pet.save();
};
