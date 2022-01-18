//  import db from "../../connection.js";
import query from "../../connection.js";
// const response = db.query(
//   `CREATE TABLE IF NOT EXISTS resources (id SERIAL PRIMARY KEY, username TEXT, topic TEXT, keywords TEXT, description TEXT, link TEXT,);`

// );

// console.log(response);

// db.end();
const sqlString = `CREATE TABLE IF NOT EXISTS resources (id SERIAL PRIMARY KEY, username TEXT, topic TEXT, keywords TEXT, description TEXT, link TEXT)`;

async function createResourcesTable() {
  const res = await query(sqlString);
  console.log("Created resources table", res);
}

createResourcesTable();
