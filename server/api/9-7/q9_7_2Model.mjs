import { query } from "../../db/manager.mjs";

const getExamById = async (id) => {
  const sql = "SELECT * FROM exams WHERE id = $1;";
  const result = await query(sql, [id]);

  return result.rows[0];  // 単一レコードを返す
}

export const examsModel = {
  getExamById,
}