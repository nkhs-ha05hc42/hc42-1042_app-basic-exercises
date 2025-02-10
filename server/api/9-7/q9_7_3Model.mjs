import { query } from "../../db/manager.mjs";

const insertExam = async (user_id, year, month, day, name, score) => {
  const sql = `
    INSERT INTO exams (user_id, year, month, day, name, score)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [user_id, year, month, day, name, score];
  const result = await query(sql, values);
  return result.rows[0];
}

export const examsModel = {
  insertExam,
}