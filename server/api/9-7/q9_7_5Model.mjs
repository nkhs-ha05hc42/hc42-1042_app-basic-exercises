import { query } from "../../db/manager.mjs";

const deleteExam = async (id) => {
  const sql = `
    DELETE FROM exams
    WHERE id = $1
    RETURNING *;
  `;
  const result = await query(sql, [id]);
  return result.rows[0]; // 削除したデータを返す
}

export const examsModel = {
  deleteExam,
}