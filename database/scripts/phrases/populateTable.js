import { query } from "../../connection.js";

const sqlString = `INSERT INTO phrases (phrase_desc, phrase_club) VALUES ($1, $2);`;

const response = await query(sqlString, ["did you see the game last night?", "generic"]);

console.log(response);
