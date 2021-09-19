import { AllPets } from "../models/pet";
import { readFileSync } from "fs";
import Handlebars from "handlebars";

const templateSource = readFileSync(
  "./src/views/leaderboard.handlebars"
).toString();

const template = Handlebars.compile(templateSource);

export const getLeaderboardHTMLController = async () => {
  const pets = await AllPets.get();
  return template({ pets });
};
