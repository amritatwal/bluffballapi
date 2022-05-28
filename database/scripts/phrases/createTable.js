import { query } from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS phrases (
  phrase_id SERIAL PRIMARY KEY,
  phrase_desc TEXT, 
  phrase_club TEXT
);`;

export async function createPhrasesTable() {
  const res = await query(sqlString);
  console.log("phrases table created", res);
}

createPhrasesTable();

