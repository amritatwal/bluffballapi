import express from "express";
import { getAllPhrases } from "../models/phrases.js"
const phrasesRouter = express.Router();

/* GET users listing. */
phrasesRouter.get("/", async function (req, res) {
  const data = await getAllPhrases();
  res.json({
    success: true,
    payload: data
  });
});

export default phrasesRouter;
