import { query } from "../../connection.js";
import { listOfPhrases } from "../../../lib/data.js";

const sqlString = `INSERT INTO phrases (phrase_desc, phrase_club) VALUES ($1, $2);`;

async function populatePhrasesTable() {
  for (let i = 0; i < listOfPhrases.length; i++) {
    const response = await query(sqlString, [
      listOfPhrases[i].phrase,
      listOfPhrases[i].category,
    ]);
    console.log(response);
  }
}

populatePhrasesTable();
