import { Schema, model, Document } from "mongoose";

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

  constructor(fields: Pet) {
    const { id, name, points, imageUrl } = fields;
    this.id = id;
    this.name = name;
    this.points = points;
    this.imageUrl = imageUrl;

    dbModel.create(fields);
  }

  public async save() {
    await dbModel.updateOne(
      { id: this.id },
      { name: this.name, points: this.points, imageUrl: this.imageUrl }
    );

    return;
  }
}

export class AllPets {
  public async get(): Promise<Pet[]> {
    return await dbModel.find({}).lean();
  }
}
