import query from "../db/connection.js";

export async function getResources() {
  const result = await query(`SELECT * FROM resources;`);
  return result.rows;
}

export async function searchResourcesByKeyword(keywords) {
  const result = await query(
    `SELECT * FROM resources WHERE keywords ILIKE '%' || $1 || '%'`,
    [keywords]
  );
  console.log(result);

  return result.rows;
}

export async function searchResourcesByTopic(topic) {
  const result = await query(
    `SELECT * FROM resources WHERE topic ILIKE '%' || $1 || '%'`,
    [topic]
  );
  return result.rows;
}

export async function searchResourcesByUsername(username) {
  const result = await query(
    `SELECT * FROM resources WHERE username ILIKE '%' || $1 || '%'`,
    [username]
  );
  return result.rows;
}

export async function getResourcesbyLimits(limit) {
  const result = await query(
    `SELECT * FROM resources ORDER BY id DESC LIMIT $1;`,
    [limit]
  );
  return result.rows;
}

export async function deleteResourceById(id) {
  const result = await query(`DELETE FROM resources WHERE id=$1;`, [id]);
  return result.rows;
}

export async function createNewResource(newResource) {
  let username = newResource.username;
  let topic = newResource.topic;
  let keywords = newResource.keywords + " " + newResource.topic;
  let description = newResource.description;
  let link = newResource.link;

  const result = await query(
    `INSERT INTO resources (username, topic, keywords, description, link) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [username, topic, keywords, description, link]
  );
  return result.rows;
}
