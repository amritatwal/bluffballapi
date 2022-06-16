import { query } from "../../connection.js";

const sqlString = `DROP TABLE phrases;`;

export async function deletePhrasesTable() {
  const res = await query(sqlString);
  console.log("phrases table deleted", res);
}

deletePhrasesTable();
