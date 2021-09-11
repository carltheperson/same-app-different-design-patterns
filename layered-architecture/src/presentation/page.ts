import { app } from "./express-app";
import { readFileSync } from "fs";
import Handlebars from "handlebars";
import { getRankedPets } from "../business-logic/pet";

const templateSource = readFileSync(
  "./src/presentation/index.handlebars"
).toString();
const template = Handlebars.compile(templateSource);

export const servePage = () => {
  app.get("/", async (req, res) => {
    const pets = await getRankedPets();
    res.send(template({ pets }));
  });
};
