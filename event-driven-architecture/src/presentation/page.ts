import { app } from "./express-app";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import { PetDB } from "../persistence/db";

const templateSource = readFileSync(
  "./src/presentation/index.handlebars"
).toString();
const template = Handlebars.compile(templateSource);

export const servePage = () => {
  app.get("/", async (req, res) => {
    const pets = await PetDB.getAll();
    const petsSortedBasedOnRank = pets.sort(
      (pet1, pet2) => pet1.rank - pet2.rank
    );

    res.send(template({ pets: petsSortedBasedOnRank }));
  });
};
