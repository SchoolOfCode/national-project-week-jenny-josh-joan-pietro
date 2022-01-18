import query from "../db/connection.js";

export async function getResources() {
  const result = await query(`SELECT * FROM resources;`);
  return result.rows;
}

export async function searchResourcesByKeyword(keyword) {
  const result = await query(
    `SELECT * FROM resources WHERE keyword ILIKE '%' || $1 || '%'`,
    [keyword]
  );
  return result.rows;
}
