import query from "../../connection.js";
import createTable from "../../sampledata.js";
async function populateResourcesTable() {
  for (let i = 0; i < createTable.length; i++) {
    let username = createTable[i].username;
    let topic = createTable[i].topic;
    let keywords = createTable[i].keywords;
    let description = createTable[i].description;
    let link = createTable[i].link;

    const res = await query(
      `INSERT INTO resources (username, topic, keywords, description, link) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [username, topic, keywords, description, link]
    );
    console.log(res);
  }
}
populateResourcesTable();
