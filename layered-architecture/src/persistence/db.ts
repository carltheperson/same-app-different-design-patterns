import { Pet } from "./models/pet";
import { petModel } from "./mongo-schemas/pet";

export namespace PetDB {
  export const getAll = async (): Promise<Pet[]> => {
    return await petModel.find();
  };

  export const getOne = async (id: string): Promise<Pet | undefined> => {
    const pet = await petModel.findOne({ id });
    if (pet) {
      return pet;
    }
  };

  export const createOne = async (pet: Pet): Promise<void> => {
    await petModel.create(pet);
  };

  export const updateOne = async (updatedFields: Partial<Pet>) => {
    await petModel.updateOne(updatedFields);
  };
}
