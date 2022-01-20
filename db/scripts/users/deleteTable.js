import query from "../../connection.js";

const sqlString = `DELETE FROM resources;`;

async function deleteAllFromTable() {
  const res = await query(sqlString);
  console.log("Deleted all entries", res);
}

deleteAllFromTable();
