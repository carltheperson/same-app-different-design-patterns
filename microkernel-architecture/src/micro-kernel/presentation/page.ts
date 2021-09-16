import { app } from "./express-app";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import { PetDB } from "../persistence/db";

const templateSource = readFileSync(
  "./src/micro-kernel/presentation/index.handlebars"
).toString();
const template = Handlebars.compile(templateSource);

export const servePage = () => {
  app.get("/", async (req, res) => {
    const pets = await PetDB.getAll();
    const petsSortedBasedOnRank = pets.sort(
      (pet1, pet2) => pet2.rank - pet1.rank
    );

    res.send(template({ pets: petsSortedBasedOnRank }));
  });
};
