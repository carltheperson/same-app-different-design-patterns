import { Pet } from "../models/pet";

export const petCreationController = async (petFields: {
  name: string;
  points: number;
  imageUrl: string;
}) => {
  const pet = new Pet(petFields);
  await pet.save();
};
