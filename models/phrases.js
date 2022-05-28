import { query } from "../database/connection.js";

export async function getAllPhrases() {
    const result = await query(
      `SELECT * FROM phrases;`
    );
    return result.rows;
}