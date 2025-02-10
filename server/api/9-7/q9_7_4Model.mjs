import { query } from "../../db/manager.mjs";

const updateExam = async (id, user_id, year, month, day, name, score) => {
  const sql = `
    UPDATE exams
    SET user_id = $2, year = $3, month = $4, day = $5, name = $6, score = $7
    WHERE id = $1
    RETURNING *;
  `;
  const values = [id, user_id, year, month, day, name, score];
  const result = await query(sql, values);
  return result.rows[0]; // 更新されたデータを返す
}

export const examsModel = {
  updateExam,
}