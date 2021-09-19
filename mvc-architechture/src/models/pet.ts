import { Schema, model, Document } from "mongoose";
import { createUid } from "../utils";

const petSchema = new Schema({
  id: String,
  name: String,
  points: Number,
  imageUrl: String,
});

const dbModel = model<Pet & Document>("pet", petSchema);

export class Pet {
  public id: string;
  public name: string;
  public points: number;
  public imageUrl: string;

  constructor(fields: {
    name: string;
    imageUrl: string;
    points?: number;
    id?: string;
  }) {
    const id = fields.id ?? createUid();
    const points = fields.points ?? 0;

    this.id = id;
    this.name = fields.name;
    this.points = points;
    this.imageUrl = fields.imageUrl;

    const isCreated = Boolean(fields.id);
    if (!isCreated) {
      dbModel.create({
        name: this.name,
        imageUrl: this.imageUrl,
        id: this.id,
        points: this.points,
      });
    }
  }

  public static async getFromID(id: string) {
    const pet = await dbModel.findOne({ id });
    if (pet) {
      return new Pet({
        name: pet.name,
        imageUrl: pet.imageUrl,
        points: pet.points,
        id,
      });
    }
  }

  public async save() {
    await dbModel.updateOne(
      { id: this.id },
      { name: this.name, points: this.points, imageUrl: this.imageUrl }
    );

    return;
  }

  public upvote() {
    this.points += 1;
  }

  public downvote() {
    this.points -= 1;
  }
}

export class AllPets {
  public static async get(): Promise<Pet[]> {
    return await dbModel.find({}).lean();
  }
}
