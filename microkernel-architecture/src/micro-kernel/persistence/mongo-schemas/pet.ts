import { Schema, model, Document } from "mongoose";
import { Pet } from "../models/pet";

export const petSchema = new Schema({
  id: String,
  rank: Number,
  name: String,
  points: Number,
  imageUrl: String,
});

export const petModel = model<Pet & Document>("pet", petSchema);
