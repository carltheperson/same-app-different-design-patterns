import { eventEmitter } from "../events";
import { PetDB } from "../persistence/db";

eventEmitter.on("aPetHasUpdatedPoints", async () => {
  const pets = await PetDB.getAll();
  const petsInRankedOrder = pets.sort((pet1, pet2) => {
    return pet2.points - pet1.points;
  });
  const petsWithNewRankings = petsInRankedOrder.map((pet, i) => {
    return {
      ...pet,
      rank: pets.length - i,
    };
  });
  PetDB.updateMany(petsWithNewRankings);
});
